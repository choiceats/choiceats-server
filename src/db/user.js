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
  if (results && results.rowCount) {
    const userPassword: string = results.rows[0].password
    const salt: string = results.rows[0].salt
    const hashedPassword = await bcrypt.hash(password, salt)
    return userPassword === hashedPassword
  }

  return false
}

export const generateAccessToken = async (email: string) => {
  const token = rand(160, 36)
  const results = await query('UPDATE users SET access_token=$1 WHERE email=$2', [token, email])
  return token
}