// @flow
import { getRecipesFromSearch } from '../db/pg-adapter'
import type { UserContext } from '../types'

type RecipeSearchParams = {
  searchText: string;
  searchFilter: string;
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
  async (obj, { searchText, searchFilter }, { user }) => {
    try {
      return getRecipesFromSearch(searchText, searchFilter, user)
    } catch (e) {
      console.error('Db Error:', e)
      return e
    }
  }
export default search
