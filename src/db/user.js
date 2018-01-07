// @flow
import { query } from './'
import bcrypt from 'bcrypt'
import rand from 'csprng'

type UserInfoWithToken = {
  email: string;
  name: string;
  token: string;
  id: number;
}

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
  if (results && results.rowCount) {
    const userPassword: string = results.rows[0].password
    const salt: string = results.rows[0].salt
    const hashedPassword = await bcrypt.hash(password, salt)
    return userPassword === hashedPassword
  }

  return false
}

export const generateAccessToken:
  (email: string) => Promise<UserInfoWithToken> =
  async (email) => {
    const sqlSetToken = `
    UPDATE users
    SET access_token=$1
    WHERE email=$2
    RETURNING id, first_name, last_name, email
    `

    const token = rand(160, 36)
    const results = await query(sqlSetToken, [token, email])
    const userRow = results.rows[0]

    return {
      email: userRow.email,
      name: userRow.first_name + (userRow.last_name ? ` ${userRow.last_name}` : ''),
      token,
      id: userRow.id
    }
  }

export const createUser = async (email: string, password: string, firstName: string, lastName: string) => {
  const results = await query('SELECT email FROM users WHERE email=$1', [email])
  if (results.rowCount) {
    return {
      error: `The email address ${email} is already taken. Please use another address.`,
    }
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

  if (createResults.rowCount > 0) {
    const tokenResults = await generateAccessToken(email)

    return tokenResults
  }

  return {
    error: "The server is currently unable to create your account. Please try again later."
  }
}

const generateSecrets = async (password: string) => {
  let salt = await bcrypt.genSalt(10)
  let token = await bcrypt.hash(password, salt)

  return { token, salt }
}
