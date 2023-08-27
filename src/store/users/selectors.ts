import { RootState } from "..";

export const selectCreatingUser = (state: RootState) => state.users.creatingUser;

export const selectErrorOnCreate = (state: RootState) => state.users.errorOnCreate;

export const selectCreateSuccess = (state: RootState) => state.users.createSuccess;

export const selectTotalRecipes = (state: RootState) => state.totais.totalRecipes;
export const selectTotalExpenses = (state: RootState) => state.totais.totalExpenses;
export const selectTotalInvestments = (state: RootState) => state.totais.totalInvestments;
