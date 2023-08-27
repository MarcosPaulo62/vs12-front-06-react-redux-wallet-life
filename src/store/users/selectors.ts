import { RootState } from "..";

export const selectCreatingUser = (state: RootState) => state.users.creatingUser;

export const selectErrorOnCreate = (state: RootState) => state.users.errorOnCreate;

export const selectCreateSuccess = (state: RootState) => state.users.createSuccess;

export const selectErrorOnTotais = (state: RootState) => state.totais.errorOnTotais;
export const selectTotalRecipes = (state: RootState) => state.totais.totalRecipes;
export const selectTotalExpenses = (state: RootState) => state.totais.totalExpenses;
export const selectTotalInvestments = (state: RootState) => state.totais.totalInvestments;

export const selectErrorOnUserLogged = (state: RootState) => state.userLogged.errorOnUserLogged;
export const selectUserLogged = (state: RootState) => state.userLogged.userLogged;

export const selectErrorOnDeleteUser = (state: RootState) => state.deleteUser.errorOnDelete;
