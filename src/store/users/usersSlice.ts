import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { CreateUserData } from "../../api";
import * as API from '../../api'

type UsersSliceState = {
  // TODO: Criar interface para User
  users: any[]
  creatingUser: boolean,
  errorOnCreate?: string,
  createSuccess: boolean
}


// Action -> Reducer -> State -> Componente

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    creatingUser: false,
    errorOnCreate: undefined,
    createSuccess: false,
  } as UsersSliceState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, { payload }) => {
      if (payload) {
        state.creatingUser = false;
        state.createSuccess = true;
        state.users = [...state.users, payload]
      }
    });
    
    builder.addCase(createUser.rejected, (state, { payload, error }) => {
      state.errorOnCreate = 'Falha ao tentar criar usuário';
      state.creatingUser = false;
      state.createSuccess = false;
    });

    builder.addCase(createUser.pending, (state, action) => {
      state.creatingUser = true;
      state.errorOnCreate = undefined;
      state.createSuccess = false;
    })
  }
})

export const createUser = createAsyncThunk(
  'users/createUser',
  // if you type your function argument here
  async (data: CreateUserData, thunkApi) => {
    try {
      const user = await API.createUser(data)
      console.log('Deu certo')
      return user;
    } catch {
      console.log('Foi Rejeitado')
      return thunkApi.rejectWithValue('Falha ao tentar criar usuário!')
    }
  }
)



