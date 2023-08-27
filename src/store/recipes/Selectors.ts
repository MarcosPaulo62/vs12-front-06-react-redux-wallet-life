import { RootState } from "..";



export const selectErrorOnList = (state: RootState) => state.recipes.errorOnList;

export const selectRecipes = (state: RootState) => state.recipes.recipes;

export const selectErrorOnQuantidadeRecipes = (state: RootState) => state.quantidadeRecipes.errorOnQtd;

export const selectQuantidadeRecipes = (state: RootState) => state.quantidadeRecipes.quantidadeRecipes;