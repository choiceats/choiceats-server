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

    //    recipe: async () => {
    //      try {
    //        const results = await query('SELECT * FROM recipe where id = 1', [])
    //        return results.rows
    //      } catch (e) {
    //        console.error('Db Error:', e)
    //        return e
    //      }
    //    },
  }
}
