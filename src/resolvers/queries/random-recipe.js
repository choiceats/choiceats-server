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
    const recipeIds = await query('SELECT id FROM recipes', []);
    if (!recipeIds){
      return null
    }

   
    const recipeCount = recipeIds.rows.length
    const randomId = recipeIds.rows[getRandomInt(0, recipeCount - 1)].id
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

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
