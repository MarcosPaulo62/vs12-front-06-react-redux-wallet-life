import { createAsyncThunk } from "@reduxjs/toolkit";
import * as API from '../../../api'

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
