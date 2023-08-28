import { createAsyncThunk } from "@reduxjs/toolkit";
import * as API from '../../../api'
import { User } from "../../../model";

export const updateUser  = createAsyncThunk(
  'user/updateUser',
  async (data: User, thunkApi) => {
    try {
      const invest = await API.updateUser(data);
      return invest;
    } catch {
      return thunkApi.rejectWithValue('Falha ao atalizar usuário!')
    }
  }
)