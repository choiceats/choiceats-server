// @flow
import { query } from '../db'

export const resolvers = {
  Query: {
    recipes: async () => {
      try {
        const results = await query('SELECT * FROM recipes', [])
        return (results)
          ? results.rows
          : null
          
      } catch (e) {
        console.error('Db Error:', e)
        return e
      }
    },

    recipe: async (object, args) => {
      try {
        const results = await query('SELECT * FROM recipes WHERE id = $1', [args.id])
        return results.rows[0]
      } catch (e) {
        console.error('Db Error:', e)
        return e
      }
    },
  },

  Mutation: {
    deleteRecipe: async (object, args) => {
      try {
        const results = await query('DELETE FROM recipes WHERE id = $1', [args.id])
        return {
          id: args.id,
          count: results.rowCount,
        }
      } catch (e) {
        console.error('Db Error:', e)
        return e
      }
    },

    insertRecipe: async (object, args) => {
      const {
        name='',
        ingredients='',
        instructions='',
        author=''
      } = args.payload
      if (!name) return null
      
      const inputFields = [name, ingredients, instructions, author]
      const sqlString = `
INSERT INTO recipes (name, ingredients, instructions, author_id)
VALUES ($1, $2, $3, $4)
RETURNING id, name, ingredients, instructions, author_id
`

      try {
        const results = await query(sqlString, inputFields)
        const newRecipe = results.rows && results.rows[0]
        const authorInfo = await query('SELECT first_name, last_name FROM users WHERE id = $1 LIMIT 1', [newRecipe.author_id || ''])
        const newRecipeName = authorInfo.rows && authorInfo.rows[0]

        return Object.assign(
          {},
          results.rows[0],
          {author: `${newRecipeName.first_name} ${newRecipeName.last_name}`}
        )
      } catch (e) {
        console.error('Db Error:', e)
        return e
      }
    },

    updateRecipe: async (object, args) => {
      const {
        id,
        name,
        ingredients,
        instructions,
        authorId
      } = args.payload
      if (!name || !id) return null
      
      const updateFields = {
        name,
        ingredients,
        instructions,
        author_id: authorId
      }
      const updateKeys = Object.keys(updateFields)
        .filter(key => updateFields[key] !== null && updateFields[key] !== undefined)
      const inputFields = updateKeys
        .map(key => updateFields[key])
      const sqlUpdates = updateKeys.reduce(
        (acc, val, i) => acc +
          `${updateKeys[i]} = ` +
          `$${i + 1}` +
          ((i < updateKeys.length - 1) ? ', ': ' ')
        , '') // of form "name = $1, ingredients = $2, instruction = $3 "


      const sqlString = `
UPDATE recipes 
SET ${sqlUpdates}
WHERE id = ${id}
RETURNING id, name, ingredients, instructions, author_id
`

      try {
        const results = await query(sqlString, inputFields)
        const newRecipe = results.rows && results.rows[0]
        const authorInfo = await query('SELECT first_name, last_name FROM users WHERE id = $1 LIMIT 1', [newRecipe.author_id || ''])
        const newRecipeName = authorInfo.rows && authorInfo.rows[0]

        return Object.assign(
          {},
          results.rows[0],
          {author: `${newRecipeName.first_name} ${newRecipeName.last_name}`}
        )
      } catch (e) {
        console.error('Db Error:', e)
        return e
      }
    },
  }
}
