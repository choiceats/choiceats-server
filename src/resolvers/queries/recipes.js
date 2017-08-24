// @flow
import { query } from '../../db'

import {
  sqlRecipesGet,
  buildRecipeFromResults
} from './common'

/**
 * Fetches all recipes from the database
 *
 */

const recipes:
  () => any =
  async () => {
    try {
      const results = await query(sqlRecipesGet(), [])
      if (results) {
        const allRecipes = buildRecipeFromResults(results.rows)
        return allRecipes.map(recipe => ({...recipe, likes: recipe.likes.length}))
      } else {
        return null
      }
    } catch (e) {
      console.error('Db Error:', e)
      return e
    }
  }

export default recipes
