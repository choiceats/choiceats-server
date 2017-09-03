// @flow
import { query } from '../../'

import type { Recipe } from '../../../types'

const addLikesToRecipes:
  (recipes: Recipe[]) => Promise<void> =
  async (recipes) => {
    const recipeIds = recipes.map(r => r.id)
    const likesResults = await query(sqlRecipeLikesQuery(recipeIds.join(',')), [])
    if (!likesResults) {
      return
    }

    likesResults.rows.forEach(likesRow => {
      const recipe = recipes.find(r => r.id === likesRow.recipe_id)
      if (recipe) {
        recipe.likes.push(likesRow.likes)
      }
    })
  }

const sqlRecipeLikesQuery:
  (string) => string =
  ids => `
    SELECT
      RL.user_id as likes,
      RL.recipe_id
    FROM user_recipe_likes AS RL
    WHERE RL.recipe_id IN (${ids})
  `

export default addLikesToRecipes
