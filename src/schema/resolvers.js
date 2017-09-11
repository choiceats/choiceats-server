// @flow
import { query } from '../db'

import recipeResolver from '../resolvers/recipe'
// import recipesResolver from '../resolvers/recipes'
import searchResolver from '../resolvers/search'
import randomResolver from '../resolvers/random-recipe'
import tagsResolver from '../resolvers/tags'

import { checkIfRecipeOwner } from '../resolvers/common'

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
    randomRecipe: randomResolver,
    tags: tagsResolver,

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
          const deleteLike = await query(sqlRecipeDeleteLike, [recipeId, userId])
          const likeCountAfterDelete = await query(sqlRecipeGetAllLikes, [recipeId])
          return deleteLike
            ? {
              id: recipeId,
              youLike: false,
              likes: likeCountAfterDelete.rows.length
            }
            : {}
        } else {
          const createLike = await query(sqlRecipeCreateLike, [recipeId, userId])
          const likeData = createLike.rows[0] || {}
          const likeCountAfterLike = await query(sqlRecipeGetAllLikes, [recipeId])

          return createLike
            ? {
              id: likeData.recipe_id,
              youLike: true,
              likes: likeCountAfterLike.rows.length
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
        : await updateRecipe(recipe, userId)
    },

    deleteRecipe: async (object: any, args: {recipeId: number}, context: {user: Object}) => {
      const userId = context.user.id
      const recipeId = args.recipeId

      try {
        if (await checkIfRecipeOwner(userId, recipeId)) {
          const results = await query('DELETE FROM recipes WHERE id = $1', [recipeId])
          return {
            recipeId,
            deleted: !!results.rowCount
          }
        } else {
          return {
            recipeId,
            deleted: false
          }
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

async function updateRecipe (recipe, userId) {
  if (!(await checkIfRecipeOwner(userId, recipe.id))) {
    return null
  }
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
  await insertRecipeTags(recipe)
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

function insertRecipeTags (recipe) {
  const insertPromises = recipe.tags.map(tag => {
    return query(
      `INSERT INTO recipe_tags
        (recipe_id, tag_id)
      VALUES
        ($1, $2)`,
      [recipe.id, tag.id]
    )
  })

  return Promise.all(insertPromises)
}