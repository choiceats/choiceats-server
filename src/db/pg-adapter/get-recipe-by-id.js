// @flow
import { query } from '../'
import addIngredientsToRecipes from './common/add-ingredients-to-recipes'
import addLikesToRecipes from './common/add-likes-to-recipes'
import addTagsToRecipes from './common/add-tags-to-recipes'
import { buildBaseRecipeFromResults } from './common/helpers'

import { sqlRecipesQuery } from './queries'

import type { Recipe } from '../../types'

const getRecipeById:
  (recipeId: string, userId: string) => Promise<Recipe> =
  async (recipeId, userId) => {
    const recipeResults = await query(sqlRecipesQuery('' + recipeId), [])
    const recipes = buildBaseRecipeFromResults(recipeResults.rows)

    await addIngredientsToRecipes(recipes)
    await addLikesToRecipes(recipes, userId)
    await addTagsToRecipes(recipes)

    return recipes[0]
  }

export default getRecipeById
