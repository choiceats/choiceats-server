// @flow
type DbRecipe = {
  recipe_id: number;
  name: string;
  first_name: string;
  last_name: string;
  id: number;
  description: string;
  image_url: string;
  instructions: string;
  author_id: number;
  likes: number;
  ingredient_id: number;
  ingredient: string;
  quantity: number;
  unit: string;
  unit_abbr: string;
  unit_id: number;
}

// type RecipeResults = {
//   rows: ?DbRecipe[]
// }

import { query } from '../../db'

const SQL_RECIPE_SELECT = `
  SELECT
    users.first_name,
    users.last_name,

    R.id as recipe_id,
    R.description,
    R.image_url,
    R.name,
    R.author_id,
    R.instructions,

    U.id as unit_id,
    U.name as unit,
    U.abbr as unit_abbr,

    I.id as ingredient_id,
    I.name as ingredient,

    RL.user_id as likes,

    RI.quantity

  FROM recipe_ingredients AS RI
    FULL OUTER JOIN  recipes AS R on R.id = RI.recipe_id
    LEFT JOIN units AS U on U.id = RI.unit_id
    LEFT JOIN ingredients AS I ON I.id = RI.ingredient_id
    LEFT JOIN users ON users.id = R.author_id
    LEFT JOIN user_recipe_likes AS RL ON RL.recipe_id = R.id
`

export const sqlRecipesSearch
:(string) => string =
(filter) => {
  let dbFilter = '';
  switch (filter) {
    case 'my': 
      dbFilter = ' AND users.id=$2'
      break;
    
    case 'fav':
      dbFilter = ' AND RL.user_id=$2'
      break
    
    default:
      break;
  }

  return `
    ${SQL_RECIPE_SELECT}
    WHERE 
      ( R.name ILIKE $1
        OR I.name ILIKE $1
      )
      ${dbFilter}
  `
}

export const sqlRecipesGet
:(?number) => string =
(id) => {
  if (id) {
    return `
      ${SQL_RECIPE_SELECT}
      WHERE R.id = '${id}'
    `
  }

  return SQL_RECIPE_SELECT
}

const buildRecipeFromRow = (recipeRow: DbRecipe) => {
  return {
    id: recipeRow.recipe_id,
    name: recipeRow.name,
    author: `${recipeRow.first_name}  ${recipeRow.last_name ? recipeRow.last_name : ''}`,
    authorId: recipeRow.author_id,
    instructions: recipeRow.instructions,
    ingredients: [],
    description: recipeRow.description || '',
    imageUrl: recipeRow.image_url || '',
    likes: [],
    youLike: false
  }
}

const buildIngredientFromRow = (row: DbRecipe) => {
  return {
    id: row.ingredient_id,
    name: row.ingredient,
    quantity: row.quantity,
    unit: {
      id: row.unit_id,
      name: row.unit,
      abbr: row.unit_abbr
    }
  }
}

const addIngredientToRecipe = (recipe, recipeRow: DbRecipe) => {
  if (recipeRow.ingredient_id) {
    const ingredient = buildIngredientFromRow(recipeRow)
    recipe.ingredients.push(ingredient)
  }
  return recipe
}

const addLikeToRecipe = (recipe, row: DbRecipe, userId) => {
  const likeAlreadyCounted = recipe.likes.find(like => like === row.likes)
  if (!likeAlreadyCounted && (row.likes !== null)) {
    recipe.likes.push(row.likes)
  }
  const userLikesRecipe = recipe.likes.some(like => like === userId)
  if (userLikesRecipe) {
    recipe.youLike = true
  }
  return null
}

export const buildRecipeFromResults = (recipeRows: DbRecipe[], userId) => {
  return recipeRows.reduce((recipes = [], row, index) => {
    let recipe = recipes.find((recipe) => recipe.id === row.recipe_id)
    if (!recipe) {
      recipe = buildRecipeFromRow(row)
      recipes.push(recipe)
    }

    addIngredientToRecipe(recipe, row)
    addLikeToRecipe(recipe, row, userId)
    return recipes
  }, [])
}

export async function checkIfRecipeOwner(userId, recipeId) {
  const recipe = await query('SELECT author_id FROM recipes WHERE id = $1', [recipeId])
  return recipe.rows[0] && recipe.rows[0].author_id === userId
}