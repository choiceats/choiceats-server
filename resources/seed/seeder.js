import { query } from '../db'
import seedData from './seed-recipes'

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
  getAllUsers().then(migrateRecipes)
}

const migrateRecipes = async (users) => {
  for (let i = 0; i < seedData.length; i++) {
    const seed = seedData[i]
    const user = await insertUserIfNeeded(seed.author, users)
    await query(
      'INSERT INTO recipes (name, author_id, ingredients, instructions) VALUES ($1, $2, $3, $4)',
      [seed.name, user.id, seed.ingredients, seed.instructions]
    )
  }
}

migrateTheData()
