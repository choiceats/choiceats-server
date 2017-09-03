// @flow
import { query } from '../../'

import type { Recipe } from '../../../types'

const addIngredientsToRecipes:
  (recipes: Recipe[]) => Promise<void> =
  async (recipes) => {
    const recipeIds = recipes.map(r => r.id)
    const ingredientsResults = await query(sqlIngredientsQuery(recipeIds.join(',')), [])

    if (ingredientsResults) {
      ingredientsResults.rows.forEach(ingredientRow => {
        const recipe = recipes.find(r => r.id === ingredientRow.recipe_id)
        if (recipe) {
          recipe.ingredients.push(buildIngredientFromRow(ingredientRow))
        }
      })
    }
  }

function buildIngredientFromRow (ingredientRow) {
  return {
    id: ingredientRow.ingredient_id,
    name: ingredientRow.ingredient,
    quantity: ingredientRow.quantity,
    unit: {
      id: ingredientRow.unit_id,
      name: ingredientRow.unit,
      abbr: ingredientRow.unit_abbr
    }
  }
}

const sqlIngredientsQuery:
  (string) => string =
  ids => `
    SELECT
      U.id as unit_id,
      U.name as unit,
      U.abbr as unit_abbr,

      I.id as ingredient_id,
      I.name as ingredient,

      RI.recipe_id,
      RI.quantity

    FROM recipe_ingredients AS RI
      INNER JOIN units AS U on U.id = RI.unit_id
      INNER JOIN ingredients AS I ON I.id = RI.ingredient_id

    WHERE RI.recipe_id IN (${ids})
    `

export default addIngredientsToRecipes
