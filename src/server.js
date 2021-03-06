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

import type { $Request, $Response, NextFunction } from 'express'

dotenv.config()
passportConfig(passport)

const staticPath = path.join(__dirname, '../build')
const app = express()

const corsMiddleware:
  (req: $Request, res: $Response, next: NextFunction) => void =
  (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials')
    res.header('Access-Control-Allow-Credentials', 'true')
    next()
  }


app.use(express.static(staticPath))
app.use(corsMiddleware)

app.get('/', (req: $Request, res: $Response) => {
  res.sendFile('index.html', {
    root: staticPath
  })
  return null
})

app.get('/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql'
  })
)

app.post('/fileupload', 
  passport.authenticate('bearer', { session: false }),
  
)

app.post('/graphql',
  passport.authenticate('bearer', { session: false }),
  bodyParser.json(),
  graphqlExpress((req) => ({
    schema,
    context: {
      user: req.user
    }
  }))
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
    // React version sends as req.body.email, elm sends as req.body.user.email
    const { email, password } = (req.body && req.body.user) || req.body;
    const isValid = await user.validateEmailAndPassword(email, password)
    if (isValid) {
      const tokenResults = await user.generateAccessToken(email)
      console.log('Results token...', tokenResults);
      const response = (req.body && req.body.user)
      // Elm version is nested in a user field
        ? {
          user: {
            email: tokenResults.email,
            name: tokenResults.name,
            token: tokenResults.token,
            userId: "" + tokenResults.id
          }
        }
      // React version is not nested
        : {
          email: tokenResults.email,
          name: tokenResults.name,
          token: tokenResults.token,
          userId: "" + tokenResults.id
        }
      res.json(response)
    } else {
      res.status(401)
      res.json({ error: 'Invalid credentials' })
    }
  }
)

// Request a new user.
app.post(
  '/user',
  bodyParser.json(),
  async (req: $Request, res: $Response) => {
    const { email, password, firstName, lastName } = req.body
    const createUserAttempt = await user.createUser(email, password, firstName, lastName)
    if (createUserAttempt && createUserAttempt.error === undefined) {
      res.json({
        userId: "" + createUserAttempt.id,
        email: createUserAttempt.email,
        name: createUserAttempt.name,
        token: createUserAttempt.token,
      })
    } else {
      res.json(createUserAttempt)
    }
  }
)

const port = 4000
const address = '0.0.0.0'
app.listen(port, address)
console.log(`Running a GraphQL localhost:${port}/graphql`)
