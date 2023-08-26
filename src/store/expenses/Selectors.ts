import { RootState } from "..";



export const selectErrorOnList = (state: RootState) => state.expenses.errorOnList;

export const selectExpenses = (state: RootState) => state.expenses.expenses;

export const selectErrorOnQuantidadeExpenses = (state: RootState) => state.quantidadeExpenses.errorOnQtd;

export const selectQuantidadeExpenses = (state: RootState) => state.quantidadeExpenses.quantidadeExpenses;

export const selectErrorOnQuantidadeRecipes = (state: RootState) => state.quantidadeRecipes.errorOnQtd;

export const selectQuantidadeRecipes = (state: RootState) => state.quantidadeRecipes.quantidadeRecipes;
