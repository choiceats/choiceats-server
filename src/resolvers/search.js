// @flow
import { getRecipesFromSearch } from '../db/pg-adapter'
import type { UserContext } from '../types'

type RecipeSearchParams = {
  searchText: string;
  searchFilter: string;
  searchTags: string[];
}
type Context = {
  user: UserContext;
}

/**
 * Fetches all recipes from the database
 *
 */

const search:
  (obj: void, searchParams: RecipeSearchParams, context: Context) => any =
  async (obj, { searchText, searchFilter, searchTags }, { user }) => {
    try {
      return getRecipesFromSearch(searchText, searchFilter, searchTags, user)
    } catch (e) {
      console.error('Db Error:', e)
      return e
    }
  }
export default search
