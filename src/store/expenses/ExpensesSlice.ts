import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as API from '../../api'

type ExpensesSliceState = {
  expenses: Expenses[],
  errorOnList?: string,
}

export interface Expenses {
  idUsuario: number,
  nome: string,
  idDespesa: number,
  valor: number,
  descricao: string,
}

export const ExpensesSlice = createSlice({
  name: 'expenses',
  initialState: {
    expenses: [],
    errorOnList: undefined,
  } as ExpensesSliceState,
  reducers: {
    resetExpenses: (state) => {
      state.expenses = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(ListExpenses.fulfilled, (state, {payload}) => {
      if (payload){
        state.expenses = payload;
        state.errorOnList = undefined;
      }
    });

    builder.addCase(ListExpenses.rejected, (state,{payload}) => {
      state.errorOnList = "Falha ao listar as despesas"
    });

    builder.addCase(ListExpenses.pending, (state, action) => {
      state.errorOnList = undefined;
    })

  }
})

export const ListExpenses = createAsyncThunk(
  'expenses/getExpenses',
  
  async (payload: any, thunkApi) => {
  try{
    const expenses = await API.getExpenses()
    return expenses;
  } catch {
    return thunkApi.rejectWithValue('Falha ao buscar despesas')
  }
})
