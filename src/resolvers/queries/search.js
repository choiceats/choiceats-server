// @flow
import { query } from '../../db'

import {
  sqlRecipesSearch,
  buildRecipeFromResults
} from './common'

type RecipeSearchParams = {
  searchText: string
}
type SearchResolver = (void, RecipeSearchParams) => any;

/**
 * Fetches all recipes from the database
 *
 */
const search: SearchResolver =
async (obj, { searchText }, context) => {
  const { user } = context
  const userId = user.id
  try {
    const results = await query(sqlRecipesSearch(), [`%${searchText}%`])
    if (results) {
      const allRecipes = buildRecipeFromResults(results.rows, userId)
      return allRecipes.map(recipe => ({...recipe, likes: recipe.likes.length}))
    } else {
      return null
    }
  } catch (e) {
    console.error('Db Error:', e)
    return e
  }
}
export default search
