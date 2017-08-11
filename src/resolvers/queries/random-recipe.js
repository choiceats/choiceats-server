// @flow
import { query } from '../../db'

import {
  sqlRecipesGet,
  buildRecipeFromResults
} from './common'

/**
 * Fetches a specific recipe
 *
 */
export default async (
  obj: void, 
  { recipeId }: { recipeId: number }, 
  context: { user: any }
) => {
  try {
    const { user } = context
    const userId = user.id
    const recipeCountResults = await query('SELECT count(*) FROM recipes', []);
    if (!recipeCountResults){
      return null
    }

   
    const recipeCount = recipeCountResults.rows[0].count;
    const randomId = Math.floor(Math.random() * (Math.floor(recipeCount) - 1)) + 1
    const results = await query(sqlRecipesGet(randomId), [])
    if (results) {
      const allRecipes = buildRecipeFromResults(results.rows, userId)
      return {...allRecipes[0], likes: allRecipes[0].likes.length}
    } else {
      return null
    }
  } catch (e) {
    console.error('Db Error:', e)
    return e
  }
}
