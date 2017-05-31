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

  input RecipePayload {
    id: ID
    author: String
    ingredients: String
    instructions: String
    name: String!
  }

  type Mutation {
    deleteRecipe(id: ID): DeleteRecipeResult!
    insertRecipe(payload: RecipePayload!): Recipe!
  }
`

const schema = makeExecutableSchema({ typeDefs, resolvers })
export { schema }
