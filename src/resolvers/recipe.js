// @flow
import { getRecipeById } from '../db/pg-adapter'

type RecipeArgs = {
  recipeId: number;
}

type UserContext = {
  user: {
    id: number;
  }
}

const recipeResolver:
  (obj: void, args: RecipeArgs, context: UserContext) => Promise<any> =
  async (obj, { recipeId }, context) => {
    try {
      return await getRecipeById(recipeId)
    } catch (e) {
      console.error('Db Error:', e)
      return e
    }
  }

export default recipeResolver
