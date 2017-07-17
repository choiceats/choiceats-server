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
export default async (obj: void, { recipeId }: { recipeId: number }) => {
  try {
    const results = await query(sqlRecipesGet(recipeId), [])
    if (results) {
      const allRecipes = buildRecipeFromResults(results.rows)
      return {...allRecipes[0], likes: allRecipes[0].likes.length}
    } else {
      return null
    }
  } catch (e) {
    console.error('Db Error:', e)
    return e
  }
}
