// @flow
import { query } from '../'
import addIngredientsToRecipes from './common/add-ingredients-to-recipes'
import addLikesToRecipes from './common/add-likes-to-recipes'
import addTagsToRecipes from './common/add-tags-to-recipes'
import { buildBaseRecipeFromResults } from './common/helpers'

import { sqlRecipesQuery } from './queries'

import type { Recipe } from '../../types'

const getRecipeById:
  (id: number) => Promise<Recipe> =
  async (id) => {
    const recipeResults = await query(sqlRecipesQuery('' + id), [])
    const recipes = buildBaseRecipeFromResults(recipeResults.rows)

    addIngredientsToRecipes(recipes)
    addLikesToRecipes(recipes)
    addTagsToRecipes(recipes)

    return recipes[0]
  }

export default getRecipeById
