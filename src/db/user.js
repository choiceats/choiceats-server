import { query } from './'

export const findByToken = async token => {
  const results = await query('SELECT * FROM users WHERE token=$1', [token])
  if (results.rowCount) {
    return
  }
}
