// @flow
import { query } from '../../db'

import {
  sqlRecipesSearch,
  buildRecipeFromResults
} from './common'

type RecipeSearchParams = {
  searchText: string;
  searchFilter: string;
}
type Context = {
  user: any;
}
type SearchResolver = (void, RecipeSearchParams, Context) => any;

/**
 * Fetches all recipes from the database
 *
 */
const search: SearchResolver =
async (obj, { searchText, searchFilter }, { user }) => {
  try {
    const queryVars = [`%${searchText}%`];
    if (searchFilter !== 'all'){
      queryVars.push(user.id)
    }

    const results = await query(sqlRecipesSearch(searchFilter), queryVars)
    if (results) {
      const allRecipes = buildRecipeFromResults(results.rows, user.id)
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
