import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'

const typeDefs = `
  type Recipe {
    id: Int
    author: String
    ingredients: String
    instructions: String
    name: String
  }

  type Query {
    recipes: [Recipe]
  }
`
//    recipe(id: ID): Recipe

const schema = makeExecutableSchema({ typeDefs, resolvers })
export { schema }
