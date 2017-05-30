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
    recipe(id: ID): Recipe
  }

  type DeleteRecipeResult {
    id: ID!,
    count: Int!
  }

  type Mutation {
    deleteRecipe(id: ID): DeleteRecipeResult!
  }
`
//    updateRecipe(payload: Recipe!): Recipe!

const schema = makeExecutableSchema({ typeDefs, resolvers })
export { schema }
