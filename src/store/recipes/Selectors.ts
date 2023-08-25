import { RootState } from "..";



export const selectErrorOnList = (state: RootState) => state.recipes.errorOnList;

export const selectRecipes = (state: RootState) => state.recipes.recipes;