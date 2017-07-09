import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'

const typeDefs = `
  type Unit {
    id: ID
    name: String
    abbr: String
  }

  type Ingredient {
    id: ID
    name: String!
  }

  type RecipeIngredient {
    id: ID
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
    ingredients: [RecipeIngredient]
    instructions: String
    name: String
    youLike: Boolean
    likes: Int
  }

  input UnitInput {
    id: ID
    name: String
    abbr: String
  }

  input RecipeIngredientInput {
    id: ID
    name: String!
    unit: UnitInput
    quantity: Float!
  }

  input RecipeInput {
    id: ID
    author: String
    authorId: String
    description: String
    imageUrl: String
    ingredients: [RecipeIngredientInput]
    instructions: String
    name: String
    youLike: Boolean
    likes: Int
  }

  type Query {
    recipes: [Recipe]
    recipe(recipeId: Int!): Recipe
    units: [Unit]
    ingredients: [Ingredient]
  }

  type Mutation {
    likeRecipe(userId: ID!, recipeId: ID!): Recipe
    saveRecipe(recipe: RecipeInput): Recipe
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
