import { makeExecutableSchema } from "graphql-tools"
import { resolvers } from "./resolvers"

const typeDefs = `
  type Unit {
    id: String
    name: String
    abbr: String
  }

  type Ingredient {
    id: String
    name: String!
  }

  type RecipeIngredient {
    id: String
    name: String!
    unit: Unit
    quantity: Float!
    displayQuantity: String!
  }

  type Tag {
    id: String
    name: String!
  }

  type Recipe {
    id: String
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
    id: String
  }

  input RecipeIngredientInput {
    ingredientId: String
    unitId: String
    quantity: String
  }

  input RecipeInput {
    id: String
    description: String
    imageUrl: String
    ingredients: [RecipeIngredientInput]
    instructions: String
    name: String
    tags: [String]
  }

  type Query {
    recipes(searchText: String, searchFilter: String, searchTags: [String]): [Recipe]
    recipe(recipeId: String!): Recipe
    randomRecipe(searchFilter: String): Recipe
    units: [Unit]
    ingredients: [Ingredient]
    tags: [Tag]
  }

  type DeleteRecipeResult {
    recipeId: String!
    deleted: Boolean
  }

  type Mutation {
    likeRecipe(userId: String!, recipeId: String!): Recipe
    saveRecipe(recipe: RecipeInput): Recipe
    deleteRecipe(recipeId: String): DeleteRecipeResult!
  }
`

const schema = makeExecutableSchema({ typeDefs, resolvers })
export { schema }
