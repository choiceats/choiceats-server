// @flow

import type { Recipe } from '../../../types'

export const buildBaseRecipeFromResults:
  (recipeRows: any[]) => Recipe[] =
  (rows) => {
    return rows.map(row => buildRecipeFromRow(row))
  }

function buildRecipeFromRow (row): Recipe {
  return {
    id: row.recipe_id,
    name: row.name,
    author: `${row.first_name}  ${row.last_name ? row.last_name : ''}`,
    authorId: row.author_id,
    instructions: row.instructions,
    ingredients: [],
    tags: [],
    description: row.description || '',
    imageUrl: row.image_url || '',
    likes: [],
    youLike: false
  }
}
