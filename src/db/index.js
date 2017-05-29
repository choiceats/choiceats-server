import pg from 'pg'
// import seedData from './seed-recipes';

const { DB_NAME, DB_USER, DB_PASS, DB_HOST } = process.env

const config = {
  user: DB_USER,
  database: DB_NAME,
  password: DB_PASS,
  host: DB_HOST,
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000
}

const pool = new pg.Pool(config)
pool.on('error', function (err, client) {
  console.error('idle client error', err.message, err.stack)
})

export const query = function (text, values) {
  return new Promise((resolve, reject) => {
    pool.query(text, values, (err, res) => {
      if (err) {
        reject(err)
      }
      resolve(res)
    })
  })
}

export const connect = function (callback) {
  return pool.connect(callback)
}
