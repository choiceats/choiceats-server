// @flow
import { query } from '../db'

import recipeResolver from '../resolvers/queries/recipe'
import recipesResolver from '../resolvers/queries/recipes'
import searchResolver from '../resolvers/queries/search'

const sqlRecipeGetLike = `
SELECT
  *

FROM 
  user_recipe_likes

WHERE
  user_recipe_likes.recipe_id = $1

AND
  user_recipe_likes.user_id = $2
`

const sqlRecipeCreateLike = `
INSERT INTO user_recipe_likes
  (recipe_id, user_id)
VALUES
  ($1, $2)
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
      console.log(context)
      try {
        const {
          recipeId = '',
          userId = ''
        } = args
        if (!recipeId || !userId) return null
        const likeExists = await query(sqlRecipeGetLike, [recipeId, userId])

        if (likeExists && likeExists.rows.length) {
          console.log('deleting like')
          const deleteLike = await query(sqlRecipeDeleteLike, [recipeId, userId])
          return deleteLike
            ? deleteLike.rows[0]
            : {}
        } else {
          console.log('creating like')
          const createLike = await query(sqlRecipeCreateLike, [recipeId, userId])
          return createLike
            ? createLike.rows[0]
            : {}
        }
      } catch (e) {
        console.error('Db Error:', e)
        return e
      }
    },

    saveRecipe: async (object: any, args: any) => {
      const recipe = args.recipe
      recipe.id === null
        ? await insertRecipe(recipe)
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

async function insertRecipe (recipe) {
  try {
    await query(`
      INSERT INTO recipes
        (name, instructions, description, author_id)
      VALUES  
        ($1, $2, $3, $4)
      `,
      [recipe.name, recipe.instructions, recipe.description, 1]
    )
    await insertRecipeIngredients(recipe)
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
