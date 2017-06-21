import { query } from '../db'
import seedRecipes from './seed-recipes'
import seedIngredients from './seed-ingredients'
import seedUnits from './seed-units'
import seedPackageUnits from './seed-package-units'
import dotenv from 'dotenv'

dotenv.config()

const getAllUsers = () => {
  return new Promise((resolve) => {
    query('SELECT * FROM users').then((results) => resolve(results.rows))
  })
}

const insertUserIfNeeded = async (authorName, allUsers) => {
  const userEmail = `${authorName}@somewhere.peeps`
  const user = allUsers.find(user => user.email === userEmail)
  if (!user) {
    console.log('adding user', userEmail)
    const results = await query('INSERT INTO users (first_name, email) VALUES ($1, $2) RETURNING *', [authorName, userEmail])
    allUsers.push(results.rows[0])
    return results.rows[0]
  }
  return user
}

const migrateTheData = () => {
  migrateIngredients()
    .then(migrateUnits)
    .then(migratePackageUnits)
    .then(getAllUsers)
    .then(migrateRecipes)

  // getAllUsers().then(migrateRecipes)
}

// const migrateRecipes = async (users) => {
//  for (let i = 0; i < seedRecipes.length; i++) {
//    const seed = seedRecipes[i]
//    const user = await insertUserIfNeeded(seed.author, users)
//    await query(
//      'INSERT INTO recipes (name, author_id, ingredients, instructions) VALUES ($1, $2, $3, $4)',
//      [seed.name, user.id, seed.ingredients, seed.instructions]
//    )
//  }
// }

function setExpectedArguments(numberArguments) {
  let expectedArguments = ''
  for (let i = 1; i <= numberArguments; i = i + 1) {
    expectedArguments = expectedArguments + `$${i}` + ((i === numberArguments) ? '' : ', ' )
  }
  return expectedArguments
}

const migrateRecipes = async (users) => {
  const ingredientsQuery = await query('SELECT * FROM ingredients')
  const ingredients = ingredientsQuery.rows
  const unitsQuery = await query('SELECT * FROM units')
  const units = unitsQuery.rows
  const packageUnitsQuery = await query('SELECT * FROM package_units')
  const packageUnits = packageUnitsQuery.rows

  for (let i = 0; i < seedRecipes.length; i++) {
    const seed = seedRecipes[i]
    const user = await insertUserIfNeeded(seed.author, users)
    const insertArgs = [seed.name, user.id, seed.instructions]
    const columnNames = ['name', 'author_id', 'instructions']
    if (seed.description !== null && seed.description !== undefined) {
      insertArgs.push(seed.description)
      columnNames.push('description')
    }
    if (seed.image_url !== null && seed.image_url !== undefined) {
      insertArgs.push(seed.image_url)
      columnNames.push('image_url')
    }
    const expectedArguments = setExpectedArguments(insertArgs.length)

    const insertRecipeResult = await query(
      `INSERT INTO recipes (${columnNames.join(', ')}) VALUES (${expectedArguments}) RETURNING id`,
      insertArgs
      //, seed.ingredients
      // ingredients,
    )
    const recipeId = insertRecipeResult.rows[0].id
    for (let j = 0; j < seed.ingredients.length; j++) {
      const ingredient = seed.ingredients[j]
      if (ingredient.unitQuantity && ingredient.unit) {
        const unitId = units.find(unit => unit.name === ingredient.unit).id
        const ingredientId = ingredients.find(item => item.name === ingredient.name).id
        await query(
          'INSERT INTO recipe_ingredients (recipe_id, ingredient_id, unit_id, quantity) VALUES ($1, $2, $3, $4)',
          [recipeId, ingredientId, unitId, ingredient.unitQuantity]
        )
      }
      if (ingredient.packageQuantity && ingredient.package) {
        console.log('package_units table not yet created')
      }
    }
  }
}
//  name: 'Grasshopper Cookies (crushed)' }
// (node:12875) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): TypeError: Cannot read property 'id' of undefined

const migrateIngredients = async () => {
  for (let i = 0; i < seedIngredients.length; i++) {
    const seed = seedIngredients[i]
    await query(
      'INSERT INTO ingredients (name) VALUES ($1)',
      [seed]
    )
  }
}

const migrateUnits = async () => {
  for (let i = 0; i < seedUnits.length; i++) {
    const seed = seedUnits[i]
    await query(
      'INSERT INTO units (name, abbr) VALUES ($1, $2)',
      [seed.name, seed.abbr]
    )
  }
}

const migratePackageUnits = async () => {
  for (let i = 0; i < seedPackageUnits.length; i++) {
    const seed = seedPackageUnits[i]
    await query(
      'INSERT INTO package_units (name, quantity, unit_id) VALUES ($1, $2, $3)',
      [seed.name, seed.quantity, seed.unit_id]
    )
  }
}

migrateTheData()
