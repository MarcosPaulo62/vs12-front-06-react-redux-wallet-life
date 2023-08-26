import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as API from '../../api'

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
    resetExpenses: (state) => {
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

export const QuantidadeExpenses = createAsyncThunk(
  'expenses/getQuantidadeExpenses',
  
  async (payload: any, thunkApi) => {
  try{
    const quantidadeExpenses = await API.getQuantidadeExpenses()
    return quantidadeExpenses;
  } catch {
    return thunkApi.rejectWithValue('Falha ao buscar total de registros de despesas')
  }
})
