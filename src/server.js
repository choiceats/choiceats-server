import {
  graphqlExpress,
  graphiqlExpress
} from 'graphql-server-express'
import bodyParser from 'body-parser'
import express from 'express'
import passport from 'passport'
import dotenv from 'dotenv'

import { passportConfig } from './auth/config-passport'
import { schema } from './schema'

dotenv.config()
passportConfig(passport)

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

app.post('/graphql',
  passport.authenticate('bearer', { session: false }),
  bodyParser.json(),
  graphqlExpress({
    schema
  })
)

app.get('/testauth',
  passport.authenticate('bearer', { session: false }),
  (req, res) => {
    res.json({success: true})
  }
)

app.get('/testnoauth',
  (req, res) => {
    res.json({success: true})
  }
)

app.listen(4000)
console.log('Running a GraphQL localhost:4000/graphql')
