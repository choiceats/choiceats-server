// @flow
import { query } from '../../'

import type { Recipe } from '../../../types'

const addTagsToRecipes:
  (recipes: Recipe[]) => Promise<void> =
  async (recipes) => {
    const recipeIds = recipes.map(r => r.id)
    const tagsResults = await query(sqlRecipeTagsQuery(recipeIds.join(',')), [])
    if (!tagsResults) {
      return
    }

    tagsResults.rows.forEach(tagRow => {
      const recipe = recipes.find(r => r.id === tagRow.recipe_id)
      if (recipe) {
        recipe.tags.push({ id: tagRow.id, name: tagRow.name })
      }
    })
  }

const sqlRecipeTagsQuery:
  (string) => string =
  ids => `
    SELECT
      T.name,
      RT.recipe_id
    FROM recipe_tags AS RT
      INNER JOIN tags AS T ON T.id = RT.tag_id
    WHERE RT.recipe_id IN (${ids})
    `

export default addTagsToRecipes
