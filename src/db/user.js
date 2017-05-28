import { query } from './'

export const findByToken = async (token, cb) => {
  let results
  try {
    results = await query('SELECT * FROM users WHERE access_token=$1', [token])
  } catch (e) {
    console.error(e)
    cb(e, false)
  }

  console.log('found user?', results.rows[0])
  if (results.rowCount) {
    cb(null, results.rows[0])
  } else {
    cb(null, null)
  }
}
