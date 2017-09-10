// @flow
import { getRecipesFromSearch } from '../db/pg-adapter'

type SearchParams = {
  searchFilter: string;
  searchTags: number[];
}

type UserContext = {
  user: {
    id: number;
  }
}

const randomRecipe:
  (void, SearchParams, UserContext) => any =
  async (obj, { searchFilter, searchTags }, { user }) => {
    try {
      const useFilter = searchFilter === null
        ? 'all'
        : searchFilter
      const recipes = await getRecipesFromSearch('', useFilter, searchTags, user)
      const recipeCount = recipes.length
      const randomIndex = getRandomInt(0, recipeCount)
      return recipes[randomIndex]
    } catch (e) {
      console.error('Db Error:', e)
      return e
    }
  }

const getRandomInt:
  (number, number) => number =
  (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }

export default randomRecipe
