// @flow
import { query } from '../db'

const userFields = ' first_name, last_name '
const recipeFields = ' recipes.id, author_id, name, ingredients, instructions '

const sqlRecipesGet = `
SELECT
  users.first_name,
  users.last_name,

  R.id as recipe_id,
  R.name,
  R.author_id,
  R.instructions,

  U.id as unit_id,
  U.name as unit,
  U.abbr as unit_abbr,

  I.id as ingredient_id,
  I.name as ingredient,

  RI.quantity

FROM recipe_ingredients AS RI
  FULL OUTER JOIN  recipes AS R on R.id = RI.recipe_id
  LEFT JOIN units AS U on U.id = RI.unit_id
  LEFT JOIN ingredients AS I ON I.id = RI.ingredient_id
  LEFT JOIN users ON users.id = R.author_id
`

const buildRecipeFromRow = (recipeRow) => {
  return {
    id: recipeRow.recipe_id,
    name: recipeRow.name,
    author: `${recipeRow.first_name}  ${recipeRow.last_name ? recipeRow.last_name : ''}`,
    authorId: recipeRow.id,
    instructions: recipeRow.instructions,
    ingredients: []
  }
}

const buildIngredentFromRow = (row) => {
  return {
    name: row.ingredient,
    quantity: row.quantity,
    unit: {
      name: row.unit,
      abbr: row.unit_abbr
    }
  }
}

const addIngredentToRecipe = (recipe, recipeRow) => {
  const ingredient = buildIngredentFromRow(recipeRow)
  recipe.ingredients.push(ingredient)
  return recipe
}

export const resolvers = {
  Query: {
    recipes: async () => {
      try {
        const results = await query(sqlRecipesGet, [])
        if (results) {
          const allRecipes = results.rows.reduce((recipes = [], row, index) => {
            let recipe = recipes.find((recipe) => recipe.id === row.recipe_id)
            if (!recipe) {
              recipe = buildRecipeFromRow(row)
              recipes.push(recipe)
            }
            
            addIngredentToRecipe(recipe, row)
            return recipes
          }, [])

          console.log(allRecipes)
          return allRecipes
        } else {
          return null
        }
      } catch (e) {
        console.error('Db Error:', e)
        return e
      }
    }
    // recipe: async (object, args) => {
    //   try {
    //     const results = await query(`${sqlRecipesGet} WHERE recipes.id = $1`, [args.id])
    //     return results.rows[0]
    //   } catch (e) {
    //     console.error('Db Error:', e)
    //     return e
    //   }
    // },
  }
//   Mutation: {
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
//   }
}
