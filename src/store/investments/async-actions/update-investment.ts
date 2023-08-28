import { createAsyncThunk } from "@reduxjs/toolkit";
import { Investment } from "../../../model";
import * as API from '../../../api'

export const updateInvestment  = createAsyncThunk(
  'investment/updateInvestment',
  async (data: Investment, thunkApi) => {
    try {
      const invest = await API.updateInvestment(data);
      return invest;
    } catch {
      return thunkApi.rejectWithValue('Falha ao atualizar investimento!')
    }
  }
)