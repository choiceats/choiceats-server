import {
  graphqlExpress,
  graphiqlExpress
} from 'graphql-server-express'
import bodyParser from 'body-parser'
import express from 'express'
import dotenv from 'dotenv'

import { schema } from './schema'
import { updateSchema } from './db/update-schema'

dotenv.config()

// Update schema
updateSchema()

const app = express()

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials')
  res.header('Access-Control-Allow-Credentials', 'true')
  next()
})

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}))

app.post('/graphql', bodyParser.json(), graphqlExpress({
  schema
}))

app.listen(4000)
console.log('Running a GraphQL localhost:4000/graphql')
