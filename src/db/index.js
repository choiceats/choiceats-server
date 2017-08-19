// @flow
import pg from 'pg'

let connectionPool: ?pg.Pool

const getConfig = () => {
  const { DB_NAME, DB_USER, DB_PASS, DB_HOST } = process.env
  console.log('process.env is', process.env);
  console.log('process.env pw is', process.env.DB_PASS);
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
  console.log('entered getPool')
  if (connectionPool) {
    return connectionPool
  }

  console.log('connection pool does not already exist, attempting to create')
  connectionPool = new pg.Pool(getConfig())
  console.log('connectoin pool created', connectionPool)
  connectionPool.on('error', function (err, client) {
    console.error('idle client error', err.message, err.stack)
  })

  return connectionPool
}

export const query = function (text: string, values: any[]) {
  console.log('entered db/query method')
  const connectionPool = getPool()
  console.log('connectionPool is', connectionPool)
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
  console.log('entered db/connect method')
  const connectionPool = getPool()
  return connectionPool.connect(callback)
}
