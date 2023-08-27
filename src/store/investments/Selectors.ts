import { RootState } from "..";



export const selectErrorOnList = (state: RootState) => state.investments.errorOnList;

export const selectInvestments = (state: RootState) => state.investments.investments;

export const selectErrorOnQuantidadeInvestments = (state: RootState) => state.quantidadeInvestments.errorOnQtd;

export const selectQuantidadeInvestments = (state: RootState) => state.quantidadeInvestments.quantidadeInvestments;

export const selectCreatingUser = (state: RootState) => state.investments.creatingUser;

export const selectErrorOnCreate = (state: RootState) => state.investments.errorOnCreate;

export const selectCreateSuccess = (state: RootState) => state.investments.createSuccess;