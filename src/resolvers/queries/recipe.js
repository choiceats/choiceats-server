// @flow
import { query } from '../../db'

import {
  sqlRecipesGet,
  buildRecipeFromResults
} from './common'

type RecipeArgs = {
  recipeId: number;
}

type UserContext = {
  user: {
    id: number;
  }
}

const recipeResolver:
  (obj: void, args: RecipeArgs, context: UserContext) => any =
  async (obj, { recipeId }, context) => {
    try {
      const { user } = context
      const userId = user.id
      const results = await query(sqlRecipesGet(recipeId), [])
      if (results) {
        const allRecipes = buildRecipeFromResults(results.rows, userId)
        return {...allRecipes[0], likes: allRecipes[0].likes.length}
      } else {
        return null
      }
    } catch (e) {
      console.error('Db Error:', e)
      return e
    }
  }

export default recipeResolver
