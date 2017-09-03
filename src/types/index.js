// @flow
export type DbRecipe = {
  recipe_id: number;
  name: string;
  first_name: string;
  last_name: string;
  id: number;
  description: string;
  image_url: string;
  instructions: string;
  author_id: number;
  likes: number;
  ingredient_id: number;
  ingredient: string;
  quantity: number;
  unit: string;
  unit_abbr: string;
  unit_id: number;
}

export type UserContext = {
  id: number;
}

export type DbResults = {
  rows: any[],
  count: number
}

export type Ingredient = {
  id: number,
  name: string,
  quantity: number,
  unit: {
    id: number,
    name: string,
    abbr: string
  }
}

export type Recipe = {
  id: number,
  name: string,
  author: string,
  authorId: number,
  instructions: string,
  ingredients: Ingredient[],
  description: string,
  imageUrl: string,
  likes: number[],
  youLike: boolean,
  tags: Array<{id: number, name: string}>
}
