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
    youLike: Boolean
    likes: Int
  }

  type Query {
    recipes: [Recipe]
    recipe(recipeId: Int!): Recipe
  }

  type Mutation {
    likeRecipe(userId: ID!, recipeId: ID!): Recipe
  }
`
//

//  input RecipePayload {
//    id: ID
//    authorId: String
//    ingredients: String
//    instructions: String
//    name: String!
//  }


//    deleteRecipe(id: ID): DeleteRecipeResult!
//    insertRecipe(payload: RecipePayload!): Recipe!
//    updateRecipe(payload: RecipePayload!): Recipe!


const schema = makeExecutableSchema({ typeDefs, resolvers })
export { schema }
