// @flow
import { query } from '../'
import addIngredientsToRecipes from './common/add-ingredients-to-recipes'
import addLikesToRecipes from './common/add-likes-to-recipes'
import addTagsToRecipes from './common/add-tags-to-recipes'
import { buildBaseRecipeFromResults } from './common/helpers'

import { sqlSearchQuery, sqlRecipesQuery } from './queries'
import type { Recipe, UserContext, DbResults } from '../../types'

const getRecipesFromSearch:
  (searchText: string, searchFilter: string, user: UserContext) => Promise<Recipe[]> =
  async (searchText, searchFilter, user) => {
    const queryParams = (searchFilter !== 'all')
      ? [`%${searchText}%`, user.id]
      : [`%%`]

    const queryStr = sqlSearchQuery(searchText, searchFilter)
    const searchResults = await query(queryStr, queryParams)
    const ids = getRecipeIdsFromSearch(searchResults)

    if (ids.length === 0) {
      return []
    }

    const recipeResults = await query(sqlRecipesQuery(ids.join(',')), [])
    const recipes = buildBaseRecipeFromResults(recipeResults.rows)

    await addIngredientsToRecipes(recipes)
    await addLikesToRecipes(recipes)
    await addTagsToRecipes(recipes)

    return recipes
  }

const getRecipeIdsFromSearch:
  (results: DbResults) => number[] =
  (results) => {
    return (results)
      ? results.rows.map(row => row.id)
      : []
  }

export default getRecipesFromSearch
