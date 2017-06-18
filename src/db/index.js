// @flow
import pg from 'pg'

const getConfig = () => {
  const { DB_NAME, DB_USER, DB_PASS, DB_HOST } = process.env
  return {
    user: DB_USER,
    database: DB_NAME,
    password: DB_PASS,
    host: DB_HOST,
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
  }
}


const getPool = () => {
  const pool = new pg.Pool(getConfig())
  pool.on('error', function (err, client) {
    console.error('idle client error', err.message, err.stack)
  })

  return pool
}

export const query = function (text: string, values: any[]) {
  const pool = getPool();
  return new Promise((resolve, reject) => {
    pool.query(text, values, (err, res) => {
      if (err) {
        reject(err)
      }
      resolve(res)
    })
  })
}

export const connect = function (callback: Function) {
  return pool.connect(callback)
}
