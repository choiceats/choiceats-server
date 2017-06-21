import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'

const typeDefs = `
  type Unit {
    name: String
    abbr: String
  }

  type Ingredient {
    name: String!
    unit: Unit
    quantity: Float!
  }

  type Recipe {
    id: ID
    author: String
    authorId: String
    description: String
    imageUrl: String
    ingredients: [Ingredient]
    instructions: String
    name: String
  }

  type Query {
    recipes: [Recipe]
    recipe(id: ID): Recipe
  }
`

const schema = makeExecutableSchema({ typeDefs, resolvers })
export { schema }
