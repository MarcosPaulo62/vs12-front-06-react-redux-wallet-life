import { createSlice } from "@reduxjs/toolkit";
import { QuantidadeExpenses } from "./async-actions";


type QuantidadeExpensesSliceState = {
  quantidadeExpenses: number,
  errorOnQtd?: string,
}

export const QuantidadeExpensesSlice = createSlice({
  name: 'quantidadeExpenses',
  initialState: {
    quantidadeExpenses: 0,
    errorOnQtd: undefined,
  } as QuantidadeExpensesSliceState,
  reducers: {
    resetQuantidadeExpenses: (state) => {
      state.quantidadeExpenses = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(QuantidadeExpenses.fulfilled, (state, {payload}) => {
      if (payload){
        state.quantidadeExpenses = payload;
        state.errorOnQtd = undefined;
      }
    });

    builder.addCase(QuantidadeExpenses.rejected, (state,{payload}) => {
      state.errorOnQtd = "Falha ao listar as despesas"
    });

    builder.addCase(QuantidadeExpenses.pending, (state, action) => {
      state.errorOnQtd = undefined;
    })

  }
})


export const { resetQuantidadeExpenses } = QuantidadeExpensesSlice.actions