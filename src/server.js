// @flow
import {
  graphqlExpress,
  graphiqlExpress
} from 'graphql-server-express'
import bodyParser from 'body-parser'
import express from 'express'
import passport from 'passport'
import path from 'path'
import dotenv from 'dotenv'

import { passportConfig } from './auth/config-passport'
import { schema } from './schema'
import * as user from './db/user'

dotenv.config()
passportConfig(passport)

const static_path = path.join(__dirname, '../build')
const app = express()
app.use(express.static(static_path))
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials')
  res.header('Access-Control-Allow-Credentials', 'true')
  next()
})

app.get('/', (req, res) => {
  res.sendFile('index.html', {
    root: static_path
  })
  return null
})

app.get('/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql'
  })
)

app.post('/graphql',
  passport.authenticate('bearer', { session: false }),
  bodyParser.json(),
  graphqlExpress({
    schema
  })
)

type AuthBody = {
  body: {
    email: string;
    password: string;
  }
};

// Authenticate the user
app.post('/auth',
  bodyParser.json(),
  async (req: AuthBody, res) => {
    const { email, password } = req.body
    const isValid = await user.validateEmailAndPassword(email, password)
    if (isValid) {
      const tokenResults = await user.generateAccessToken(email)
      res.json({
        email: tokenResults.email,
        name: tokenResults.first_name + (tokenResults.last_name ? ` ${tokenResults.last_name}` : ''),
        token: tokenResults.token,
        userId: tokenResults.id,
      })
    } else {
      res.status(401)
      res.json({ error: 'Invalid creditials' })
    }
  }
)

// Request a new user.
app.post('/user',
  bodyParser.json(),
  async (req, res) => {
    const { email, password, firstName, lastName } = req.body
    const newUser = await user.createUser(email, password, firstName, lastName)
    if (newUser) {
      res.json({user: newUser})
    } else {
      res.json({error: 'something here...'})
    }
  }
)

const port = 4000
app.listen(port)
console.log(`Running a GraphQL localhost:${port}/graphql`)
