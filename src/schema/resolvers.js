// @flow
import { query } from '../db'

import recipeResolver from '../resolvers/queries/recipe'
// import recipesResolver from '../resolvers/queries/recipes'
import searchResolver from '../resolvers/queries/search'

const sqlRecipeGetUserLike = `
SELECT
  *

FROM 
  user_recipe_likes

WHERE
  user_recipe_likes.recipe_id = $1

AND
  user_recipe_likes.user_id = $2
`

const sqlRecipeGetAllLikes = `
SELECT
  recipe_id, user_id

FROM 
  user_recipe_likes

WHERE
  user_recipe_likes.recipe_id = $1
`

const sqlRecipeCreateLike = `
INSERT INTO user_recipe_likes
  (recipe_id, user_id)
VALUES
  ($1, $2)
RETURNING recipe_id, user_id
`

const sqlRecipeDeleteLike = `
DELETE FROM
  user_recipe_likes

WHERE
  user_recipe_likes.recipe_id = $1

AND
  user_recipe_likes.user_id = $2
`

export const resolvers = {
  Query: {
    recipes: searchResolver,
    recipe: recipeResolver,

    units: async () => {
      try {
        const results = await query('SELECT * FROM units', [])
        if (results) {
          return results.rows
        }
        return null
      } catch (e) {
        console.error('DB Error:', e)
        return e
      }
    },

    ingredients: async () => {
      try {
        const results = await query('SELECT * FROM ingredients', [])
        if (results) {
          return results.rows
        }
        return null
      } catch (e) {
        console.error('DB Error:', e)
        return e
      }
    }
  },

  Mutation: {
    likeRecipe: async (object: any, args: any, context: {user: Object}) => {
      try {
        const { recipeId = '' } = args
        const { user } = context
        const userId = user.id
        if (!recipeId || !userId) return null
        const likeExists = await query(sqlRecipeGetUserLike, [recipeId, userId])

        if (likeExists && likeExists.rows.length) {
          console.log('deleting like')
          const deleteLike = await query(sqlRecipeDeleteLike, [recipeId, userId])
          const likeCountAfterDelete = await query(sqlRecipeGetAllLikes, [recipeId]) 
          return deleteLike
            ? {
                id: recipeId,
                youLike: false,
                likes: likeCountAfterDelete.rows.length,
              }
            : {}
        } else {
          console.log('creating like')
          const createLike = await query(sqlRecipeCreateLike, [recipeId, userId])
          const likeData = createLike.rows[0] || {}
          const likeCountAfterLike = await query(sqlRecipeGetAllLikes, [recipeId]) 

          return createLike
            ? {
                id: likeData.recipe_id,
                youLike: true,
                likes: likeCountAfterLike.rows.length,
              }
            : {}
        }
      } catch (e) {
        console.error('Db Error:', e)
        return e
      }
    },

    saveRecipe: async (object: any, args: any, context: {user: Object}) => {
      const recipe = args.recipe
      const userId = context.user.id
      recipe.id === null
        ? await insertRecipe(recipe, userId)
        : await updateRecipe(recipe)
    },

    deleteRecipe: async (object, args) => {
      try {
        const results = await query('DELETE FROM recipes WHERE id = $1', [args.recipeId])
        console.log(args.recipeId, results.rowCount)
        return {
          recipeId: args.recipeId,
          deleted: !!results.rowCount
        }
      } catch (e) {
        console.error('Db Error:', e)
        return e
      }
    }
  }
}

async function insertRecipe (recipe, userId) {
  try {
    const results = await query(`
      INSERT INTO recipes
        (name, instructions, description, author_id)
      VALUES  
        ($1, $2, $3, $4)
      
      RETURNING id
      `,
      [recipe.name, recipe.instructions, recipe.description, userId]
    )

    if (results) {
      const newId = results.rows[0].id
      await insertRecipeIngredients({ ...recipe, id: newId })
    }
  } catch (e) {
    console.warn('COULD NOT INSERT RECIPE', e)
  }
}

async function updateRecipe (recipe) {
  await query('DELETE FROM recipe_ingredients WHERE recipe_id=$1', [recipe.id])
  await query(`
    UPDATE recipes 
    SET 
      name=$1,
      instructions=$2,
      description=$3
    WHERE
      id=$4
    `,
    [recipe.name, recipe.instructions, recipe.description, recipe.id]
  )

  await insertRecipeIngredients(recipe)
}

function insertRecipeIngredients (recipe) {
  const insertPromises = recipe.ingredients.map(i => {
    return query(
          `INSERT INTO recipe_ingredients
            (recipe_id, ingredient_id, unit_id, quantity)
          VALUES ($1, $2, $3, $4)`,
          [recipe.id, i.id, i.unit ? i.unit.id : null, i.quantity]
        )
  })

  return Promise.all(insertPromises)
}
