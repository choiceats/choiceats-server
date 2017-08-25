// @flow
import { query } from '../../db'

import {
  sqlRecipeUserSearch,
  sqlRecipesGet,
  buildRecipeFromResults
} from './common'

type SearchParams = {
  searchFilter: string;
}

type UserContext = {
  user: {
    id: number;
  }
}

const randomRecipe:
  (void, SearchParams, UserContext) => any =
  async (obj, { searchFilter }, { user }) => {
    try {
      const useSearchFilter = (searchFilter) || 'all'
      const userId = user.id
      const queryVars = (useSearchFilter !== 'all')
        ? [user.id]
        : []

      console.log('SEARCH FILTER', useSearchFilter)
      console.log('SQL', sqlRecipeUserSearch(useSearchFilter))
      console.log('QUERY FILTER', queryVars)

      const recipeResults = await query(sqlRecipeUserSearch(useSearchFilter), queryVars)
      if (!recipeResults) {
        return null
      }

      const recipeCount = recipeResults.rows.length
      const randomIndex = Math.floor(Math.random() * (Math.floor(recipeCount) - 1)) + 1
      const randomRecipe = recipeResults.rows[randomIndex]
      console.log('RANDOM RECIPE', recipeCount, randomIndex, randomRecipe)

      const allRecipes = buildRecipeFromResults([randomRecipe], userId)
      return {...allRecipes[0], likes: allRecipes[0].likes.length}
    } catch (e) {
      console.error('Db Error:', e)
      return e
    }
  }

export default randomRecipe
