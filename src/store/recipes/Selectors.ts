import { RootState } from "..";



export const selectErrorOnList = (state: RootState) => state.recipes.errorOnList;

export const selectRecipes = (state: RootState) => state.recipes.recipes;

export const selectErrorOnQuantidadeRecipes = (state: RootState) => state.quantidadeRecipes.errorOnQtd;

export const selectQuantidadeRecipes = (state: RootState) => state.quantidadeRecipes.quantidadeRecipes;

export const selectCreatingUser = (state: RootState) => state.recipes.creatingUser;

export const selectErrorOnCreate = (state: RootState) => state.recipes.errorOnCreate;

export const selectCreateSuccess = (state: RootState) => state.recipes.createSuccess;