// @flow
import { getRecipeById } from '../db/pg-adapter'

type RecipeArgs = {
  recipeId: string;
}

type UserContext = {
  user: {
    id: string;
  }
}

const recipeResolver:
  (obj: void, args: RecipeArgs, context: UserContext) => Promise<any> =
  async (obj, { recipeId }, context) => {
    try {
      return await getRecipeById(recipeId, context.user.id)
    } catch (e) {
      console.error('Db Error:', e)
      return e
    }
  }

export default recipeResolver
