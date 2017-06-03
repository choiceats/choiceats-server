// @flow
import { query } from './'
import bcrypt from 'bcrypt'
import rand from 'csprng'

export const findByToken = async (token: string, cb: Function) => {
  let results
  try {
    results = await query('SELECT * FROM users WHERE access_token=$1', [token])
  } catch (e) {
    console.error(e)
    cb(e, false)
  }

  if (results && results.rowCount) {
    cb(null, results.rows[0])
  } else {
    cb(null, null)
  }
}

type UserPasswordSalt = {
  password: string;
  salt: string;
}

type ValidateQueryResponse = {
  rowCount: number;
  rows: UserPasswordSalt[];
}

export const validateEmailAndPassword = async (email: string, password: string) => {
  const results: ?ValidateQueryResponse = await query('SELECT email, password, salt FROM users WHERE email=$1', [email])
  console.log('RESULTS', results.rows[0], email)
  if (results && results.rowCount) {
    const userPassword: string = results.rows[0].password
    const salt: string = results.rows[0].salt
    const hashedPassword = await bcrypt.hash(password, salt)
    return userPassword === hashedPassword
  }

  return false
}

export const generateAccessToken = async (email: string) => {
  const sqlSetToken = `
UPDATE users
SET access_token=$1
WHERE email=$2
RETURNING id, first_name, last_name, email
`;

  const token = rand(160, 36)
  const results = await query(sqlSetToken, [token, email])
  console.log(results.rows)
  return {...results.rows[0], token}
}

export const createUser = async (email: string, password: string, firstName: string, lastName: string) => {
  const results = await query('SELECT email FROM users WHERE email=$1', [email])
  if (results.rowCount) {
    return false // Email taken
  }

  const { token, salt } = await generateSecrets(password)
  const createResults = await query(
    `
      INSERT INTO users
        (first_name, last_name, email, password, salt)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id
    `,
    [firstName, lastName, email, token, salt])

  if (createResults.rowCount) {
    return createResults.rows[0].id
  }
  return false
}

const generateSecrets = async (password: string) => {
  console.log('pass', password)
  let salt = await bcrypt.genSalt(10)
  console.log('SALT', salt)
  let token = await bcrypt.hash(password, salt)

  return { token, salt }
}
