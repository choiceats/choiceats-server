import { query } from '../db'
import seedRecipes from './seed-recipes'
import seedIngredients from './seed-ingredients'
import seedUnits from './seed-units'
import seedPackageUnits from './seed-package-units'

const getAllUsers = () => {
  return new Promise((resolve) => {
    query('SELECT * FROM users').then((results) => resolve(results.rows))
  })
}

const insertUserIfNeeded = async (authorName, allUsers) => {
  const userEmail = `${authorName}@somewhere.peeps`
  console.log('check users...', allUsers)
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
  //.then(migrateRecipes)

  //getAllUsers().then(migrateRecipes)
}

//const migrateRecipes = async (users) => {
//  for (let i = 0; i < seedRecipes.length; i++) {
//    const seed = seedRecipes[i]
//    const user = await insertUserIfNeeded(seed.author, users)
//    await query(
//      'INSERT INTO recipes (name, author_id, ingredients, instructions) VALUES ($1, $2, $3, $4)',
//      [seed.name, user.id, seed.ingredients, seed.instructions]
//    )
//  }
//}

const migrateRecipes = async (users) => {
  const ingredients = await query('SELECT * FROM ingredients')
  const units = await query('SELECT * FROM units')
  const packageUnits = await query('SELECT * FROM package_units')

  for (let i = 0; i < seedRecipes.length; i++) {
    const seed = seedRecipes[i]
    const user = await insertUserIfNeeded(seed.author, users)
    await query(
      'INSERT INTO recipes (name, author_id, ingredients, instructions) VALUES ($1, $2, $3, $4)',
      [seed.name, user.id, seed.ingredients, seed.instructions]
    )
  }
}

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
