import { createAsyncThunk } from "@reduxjs/toolkit";
import * as API from '../../../api'

export const ListExpenses = createAsyncThunk(
  'expenses/getExpenses',
  
  async (payload: any, thunkApi) => {
    try{
      const expenses = await API.getExpenses(payload.pagina, payload.quantidadeRegistros, payload.valor)
      return expenses;
    } catch {
      return thunkApi.rejectWithValue('Falha ao buscar despesas')
    }
  })
