// @flow
export type DbRecipe = {
  recipe_id: string;
  name: string;
  first_name: string;
  last_name: string;
  id: string;
  description: string;
  image_url: string;
  instructions: string;
  author_id: string;
  likes: number;
  ingredient_id: string;
  ingredient: string;
  quantity: number;
  unit: string;
  unit_abbr: string;
  unit_id: string;
}

export type UserContext = {
  id: string;
}

export type DbResults = {
  rows: any[],
  count: number
}

export type Ingredient = {
  id: string,
  name: string,
  quantity: number,
  unit: {
    id: string,
    name: string,
    abbr: string
  }
}

export type Tag = {
  id: string,
  name: string
}

export type Recipe = {
  id: string,
  name: string,
  author: string,
  authorId: number,
  instructions: string,
  ingredients: Ingredient[],
  description: string,
  imageUrl: string,
  likes: number[],
  youLike: boolean,
  tags: Array<{id: string, name: string}>
}
