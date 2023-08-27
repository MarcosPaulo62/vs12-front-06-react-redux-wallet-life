import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as API from "../../api";

type DeleteUserSliceState = {
  idUser: number;
  errorOnDelete?: string;
};

export const DeleteUserSlice = createSlice({
  name: "deleteUser",
  initialState: {
    idUser: 0,
    errorOnDelete: undefined,
    corretora: ""
  } as DeleteUserSliceState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(DeleteUser.fulfilled, (state, { payload }) => {
      if (payload) {
        state.errorOnDelete = undefined;
      }
    });

    builder.addCase(DeleteUser.rejected, (state, { payload }) => {
      state.errorOnDelete = "Falha ao apagar usuário";
    });

    builder.addCase(DeleteUser.pending, (state, action) => {
      state.errorOnDelete = undefined;
    });
  },
});

export const DeleteUser = createAsyncThunk(
  'user/deleteUser',
  
  async (payload: any, thunkApi) => {
    try{
      const deleteUser = await API.deleteUser(payload.idUser)
      return deleteUser;
    } catch {
      return thunkApi.rejectWithValue('Falha ao apagar usuário')
    }
  }
)
