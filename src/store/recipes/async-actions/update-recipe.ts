import { createAsyncThunk } from "@reduxjs/toolkit";
import { Revenue } from "../../../model";
import * as API from '../../../api'

export const updateRecipe  = createAsyncThunk(
  'recipe/updateRecipe',
  async (data: Revenue, thunkApi) => {
    try {
      const invest = await API.updateRecipe(data);
      return invest;
    } catch {
      return thunkApi.rejectWithValue('Falha ao atualizar receita!')
    }
  }
)