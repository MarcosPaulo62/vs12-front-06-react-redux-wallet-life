import { createAsyncThunk } from "@reduxjs/toolkit";
import * as API from '../../../api'
import { Expense } from "../../../model";

export const updateExpense  = createAsyncThunk(
  'expense/updateExpense',
  async (data: Expense, thunkApi) => {
    try {
      const invest = await API.updateExpense(data);
      return invest;
    } catch {
      return thunkApi.rejectWithValue('Falha ao atalizar despesa!')
    }
  }
)