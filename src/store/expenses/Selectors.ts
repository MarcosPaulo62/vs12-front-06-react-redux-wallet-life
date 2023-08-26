import { RootState } from "..";



export const selectErrorOnList = (state: RootState) => state.expenses.errorOnList;

export const selectExpenses = (state: RootState) => state.expenses.expenses;

export const selectErrorOnQtd = (state: RootState) => state.quantidadeExpenses.errorOnQtd;

export const selectQuantidadeExpenses = (state: RootState) => state.quantidadeExpenses.quantidadeExpenses;
