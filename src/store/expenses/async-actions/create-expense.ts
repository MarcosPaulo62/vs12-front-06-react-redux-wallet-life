import { createAsyncThunk } from "@reduxjs/toolkit";
import * as API from '../../../api'

export const createExpense  = createAsyncThunk(
  'investments/createInvestment',
  async (data: API.CreateExpenseData, thunkApi) => {
    try {
      const invest = await API.createExpense(data);
      return invest;
    } catch {
      return thunkApi.rejectWithValue('Falha ao adicionar investimento!')
    }
  }
)