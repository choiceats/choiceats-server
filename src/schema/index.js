import { makeExecutableSchema } from "graphql-tools"
import { resolvers } from "./resolvers"

const typeDefs =
  `
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
    displayQuantity: String!
  }

  type Tag {
    id: ID
    name: String!
  }

  type Recipe {
    id: ID
    author: String
    authorId: String
    description: String
    imageUrl: String
    ingredients: [RecipeIngredient]
    tags: [Tag]
    instructions: String
    name: String
    youLike: Boolean
    likes: [Int]
  }

  input UnitInput {
    id: ID
  }

  input RecipeIngredientInput {
    id: ID
    unitId: Int
    quantity: Float!
  }

  input RecipeInput {
    id: ID
    description: String
    imageUrl: String
    ` +
  /* ingredients: [RecipeIngredientInput] */ `
    instructions: String
    name: String
    tags: [String]
  }

  type Query {
    recipes(searchText: String, searchFilter: String, searchTags: [String]): [Recipe]
    recipe(recipeId: Int!): Recipe
    randomRecipe(searchFilter: String): Recipe
    units: [Unit]
    ingredients: [Ingredient]
    tags: [Tag]
  }

  type DeleteRecipeResult {
    recipeId: ID!
    deleted: Boolean
  }

  type Mutation {
    likeRecipe(userId: ID!, recipeId: ID!): Recipe
    saveRecipe(recipe: RecipeInput): Recipe
    deleteRecipe(recipeId: ID): DeleteRecipeResult!
  }
`

const schema = makeExecutableSchema({ typeDefs, resolvers })
export { schema }
