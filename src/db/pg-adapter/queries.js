// @flow
export const sqlRecipesQuery:
  (string) => string =
  (recipeIds) => `
    SELECT
      users.first_name,
      users.last_name,

      R.id as recipe_id,
      R.description,
      R.image_url,
      R.name,
      R.author_id,
      R.instructions

    FROM 
      recipes AS R
      INNER JOIN users ON users.id = R.author_id

    WHERE 
      R.id IN (${recipeIds})
    `

export const sqlSearchQuery:
  (string, string) => string =
  (filterString, userFilter) => {
    const select = `SELECT
  DISTINCT(R.id)
      
FROM recipes AS R
  LEFT JOIN recipe_ingredients AS RI on R.id = RI.recipe_id
  LEFT JOIN units AS U on U.id = RI.unit_id
  LEFT JOIN ingredients AS I ON I.id = RI.ingredient_id
  LEFT JOIN users ON users.id = R.author_id
  LEFT JOIN user_recipe_likes AS RL ON RL.recipe_id = R.id
`
    const filters = [`
      ( R.name ILIKE $1
        OR I.name ILIKE $1
      )`
    ]

    const userQueryFilter = sqlRecipeUserFilter(userFilter, 2)
    if (userQueryFilter !== '') {
      filters.push(userQueryFilter)
    }

    return `
      ${select}
      WHERE
      ${filters.join(' AND ')}`
  }

const sqlRecipeUserFilter:
  (string, number | void) => string =
  (filter, index = 1) => {
    switch (filter) {
      case 'my':
        return ` users.id=$${index}`
      case 'fav':
        return ` RL.user_id=$${index}`
      default:
        return ''
    }
  }
