// @flow
import { query } from '../db'

const SQL_RECIPE_SELECT = `
  SELECT
    users.first_name,
    users.last_name,

    R.id as recipe_id,
    R.description,
    R.image_url,
    R.name,
    R.author_id,
    R.instructions,

    U.id as unit_id,
    U.name as unit,
    U.abbr as unit_abbr,

    I.id as ingredient_id,
    I.name as ingredient,

    RL.user_id as likes,

    RI.quantity
`

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

const SQL_RECIPE_FROM = `
  FROM recipe_ingredients AS RI
    FULL OUTER JOIN  recipes AS R on R.id = RI.recipe_id
    LEFT JOIN units AS U on U.id = RI.unit_id
    LEFT JOIN ingredients AS I ON I.id = RI.ingredient_id
    LEFT JOIN users ON users.id = R.author_id
    LEFT JOIN user_recipe_likes AS RL ON RL.recipe_id = R.id
`

const sqlRecipesGet
: (?number) => string =
  (id) => {
    if (id) {
      return `
        ${SQL_RECIPE_SELECT}
        ${SQL_RECIPE_FROM}
        WHERE R.id = '${id}'
      `
    }

    return `
      ${SQL_RECIPE_SELECT}
      ${SQL_RECIPE_FROM}
    `
  }

type DbRecipe = {
  recipe_id: number;
  name: string;
  first_name: string;
  last_name: string;
  id: number;
  description: string;
  image_url: string;
  instructions: string;
}

const buildRecipeFromRow = (recipeRow: DbRecipe) => {
  return {
    id: recipeRow.recipe_id,
    name: recipeRow.name,
    author: `${recipeRow.first_name}  ${recipeRow.last_name ? recipeRow.last_name : ''}`,
    authorId: recipeRow.id,
    instructions: recipeRow.instructions,
    ingredients: [],
    description: recipeRow.description || '',
    imageUrl: recipeRow.image_url || '',
    likes: []
  }
}

const buildIngredientFromRow = (row) => {
  return {
    name: row.ingredient,
    quantity: row.quantity,
    unit: {
      name: row.unit,
      abbr: row.unit_abbr
    }
  }
}

const addIngredientToRecipe = (recipe, recipeRow) => {
  const ingredient = buildIngredientFromRow(recipeRow)
  recipe.ingredients.push(ingredient)
  return recipe
}

const addLikeToRecipe = (recipe, row) => {
  if (!recipe.likes.find(like => like === row.likes)) {
    recipe.likes.push(row.likes)
  }
  return null
}

export const resolvers = {
  Query: {
    recipes: async () => {
      try {
        const results = await query(sqlRecipesGet(), [])
        if (results) {
          console.log('Total recipe records returned:', results.rows.length)
          const allRecipes = results.rows.reduce((recipes = [], row, index) => {
            let recipe = recipes.find((recipe) => recipe.id === row.recipe_id)
            if (!recipe) {
              recipe = buildRecipeFromRow(row)
              recipes.push(recipe)
            }

            addIngredientToRecipe(recipe, row)
            addLikeToRecipe(recipe, row)
            return recipes
          }, [])

          return allRecipes.map(recipe => ({...recipe, likes: recipe.likes.length}))
        } else {
          return null
        }
      } catch (e) {
        console.error('Db Error:', e)
        return e
      }
    },

    recipe: async (obj: void, { recipeId }: { recipeId: number }) => {
      try {
        console.log('GETTING SPECIFIC RECIPE: ', recipeId, sqlRecipesGet(recipeId))
        const results = await query(sqlRecipesGet(recipeId), [])
        if (results) {
          const allRecipes = results.rows.reduce((recipes = [], row, index) => {
            let recipe = recipes.find((recipe) => recipe.id === row.recipe_id)
            if (!recipe) {
              recipe = buildRecipeFromRow(row)
              recipes.push(recipe)
            }

            addIngredientToRecipe(recipe, row)
            addLikeToRecipe(recipe, row)
            return recipes
          }, [])

          // console.log(allRecipes)
          //return allRecipes[0]
          return {...allRecipes[0], likes: allRecipes[0].likes.length}
        } else {
          return null
        }
      } catch (e) {
        console.error('Db Error:', e)
        return e
      }
    }
  },

  Mutation: {
    likeRecipe: async (object: any, args: any) => {
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
    }
    //     deleteRecipe: async (object, args) => {
    //       try {
    //         const results = await query('DELETE FROM recipes WHERE id = $1', [args.id])
    //         return {
    //           id: args.id,
    //           count: results.rowCount,
    //         }
    //       } catch (e) {
    //         console.error('Db Error:', e)
    //         return e
    //       }
    //     },

    //     insertRecipe: async (object, args) => {
    //       const {
    //         name='',
    //         ingredients='',
    //         instructions='',
    //         author=''
    //       } = args.payload
    //       if (!name) return null

    //       const inputFields = [name, ingredients, instructions, author]
    //       const sqlInsert = `
    // INSERT INTO recipes (name, ingredients, instructions, author_id)
    // VALUES ($1, $2, $3, $4)
    // RETURNING id, name, ingredients, instructions, author_id
    // `

    //       try {
    //         const results = await query(sqlInsert, inputFields)
    //         const newRecipe = results.rows && results.rows[0]
    //         const authorInfo = await query('SELECT first_name, last_name FROM users WHERE id = $1 LIMIT 1', [newRecipe.author_id || ''])
    //         const newRecipeName = authorInfo.rows && authorInfo.rows[0]

    //         return Object.assign(
    //           {},
    //           results.rows[0],
    //           {author: `${newRecipeName.first_name} ${newRecipeName.last_name}`}
    //         )
    //       } catch (e) {
    //         console.error('Db Error:', e)
    //         return e
    //       }
    //     },

    //     updateRecipe: async (object, args) => {
    //       const {
    //         id,
    //         name,
    //         ingredients,
    //         instructions,
    //         authorId
    //       } = args.payload
    //       if (!name || !id) return null

    //       const updateFields = {
    //         name,
    //         ingredients,
    //         instructions,
    //         author_id: authorId
    //       }
    //       const updateKeys = Object.keys(updateFields)
    //         .filter(key => updateFields[key] !== null && updateFields[key] !== undefined)
    //       const inputFields = updateKeys
    //         .map(key => updateFields[key])
    //       const sqlUpdates = updateKeys.reduce(
    //         (acc, val, i) => acc +
    //           `${updateKeys[i]} = ` +
    //           `$${i + 1}` +
    //           ((i < updateKeys.length - 1) ? ', ': ' ')
    //         , '') // of form "name = $1, ingredients = $2, instruction = $3 "

    //       const sqlUpdate = `
    // UPDATE recipes
    // SET ${sqlUpdates}
    // WHERE id = ${id}
    // RETURNING id, name, ingredients, instructions, author_id
    // `

    //       try {
    //         const results = await query(sqlUpdate, inputFields)
    //         const newRecipe = results.rows && results.rows[0]
    //         const authorInfo = await query('SELECT first_name, last_name FROM users WHERE id = $1 LIMIT 1', [newRecipe.author_id || ''])
    //         const newRecipeName = authorInfo.rows && authorInfo.rows[0]

    //         return Object.assign(
    //           {},
    //           results.rows[0],
    //           {author: `${newRecipeName.first_name} ${newRecipeName.last_name}`}
    //         )
    //       } catch (e) {
    //         console.error('Db Error:', e)
    //         return e
    //       }
    //     },
  }
}
