import { query } from '../db'

export const resolvers = {
  Query: {
    recipes: async () => {
      try {
        const results = await query('SELECT * FROM recipes', [])
        return results.rows
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
  }
}
