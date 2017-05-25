import seedRecipes from '../seed-recipes';

export const resolvers = {
  Query: {
    recipes: () => {
      console.log(obj, args, context);
      return seedRecipes;
    },
  },
};
