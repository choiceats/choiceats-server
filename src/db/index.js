// @flow
import pg from 'pg'

let connectionPool: ?pg.Pool

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
  if (connectionPool) {
    return connectionPool
  }

  connectionPool = new pg.Pool(getConfig())
  connectionPool.on('error', function (err, client) {
    console.error('idle client error', err.message, err.stack)
  })

  return connectionPool
}

export const query = function (text: string, values: any[]) {
  const connectionPool = getPool()
  return new Promise((resolve, reject) => {
    connectionPool.query(text, values, (err, res) => {
      if (err) {
        reject(err)
      }
      resolve(res)
    })
  })
}

export const connect = function (callback: Function) {
  const connectionPool = getPool()
  return connectionPool.connect(callback)
}
