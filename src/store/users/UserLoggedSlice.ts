import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as API from '../../api'

type UserLoggedSliceState = {
  userLogged: User,
  errorOnUserLogged?: string,
}

export interface User {
  idUsuario: number,
  nome: string,
  dataNascimento: string,
  cpf: number,
  email: string,
  senha: string,
  cargos: API.AuthorityResponse,
  login: string
}

const initialState: UserLoggedSliceState = {
  userLogged: { 
    idUsuario: 0,
    nome: '',
    dataNascimento: '',
    cpf: 0,
    email: '',
    senha: '',
    cargos: {idCargo: 0, nome: '', authority: ''},
    login: ''
  },
  errorOnUserLogged: '',
};

export const UserLoggedSlice = createSlice({
  name: 'userLogged',
  initialState,
  reducers: {
    resetUserLogged: (state) => {
      return {...initialState};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(UserLogged.fulfilled, (state, {payload}) => {
      if (payload){
        state.userLogged = payload;
        state.errorOnUserLogged = undefined;
      }
    });

    builder.addCase(UserLogged.rejected, (state,{payload}) => {
      state.errorOnUserLogged = "Falha ao buscar usuário logado"
    });

    builder.addCase(UserLogged.pending, (state, action) => {
      state.errorOnUserLogged = undefined;
    })

  }
})

export const UserLogged = createAsyncThunk(
  'userLogged/getUserLogged',
  
  async (payload: any, thunkApi) => {
    try{
      const userLogged = await API.getUserLogged()
      return userLogged;
    } catch {
      return thunkApi.rejectWithValue('Falha ao buscar usuário logado')
    }
  })