import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as API from '../../api'

type QuantidadeRecipesSliceState = {
  quantidadeRecipes: number,
  errorOnQtd?: string,
}

export const QuantidadeRecipesSlice = createSlice({
  name: 'quantidadeRecipes',
  initialState: {
    quantidadeRecipes: 0,
    errorOnQtd: undefined,
  } as QuantidadeRecipesSliceState,
  reducers: {
    resetRecipes: (state) => {
      state.quantidadeRecipes = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(QuantidadeRecipes.fulfilled, (state, {payload}) => {
      if (payload){
        state.quantidadeRecipes = payload;
        state.errorOnQtd = undefined;
      }
    });

    builder.addCase(QuantidadeRecipes.rejected, (state,{payload}) => {
      state.errorOnQtd = "Falha ao listar as receitas"
    });

    builder.addCase(QuantidadeRecipes.pending, (state, action) => {
      state.errorOnQtd = undefined;
    })

  }
})

export const QuantidadeRecipes = createAsyncThunk(
  'recipes/getQuantidadeRecipes',
  
  async (payload: any, thunkApi) => {
  try{
    const quantidadeRecipes = await API.getQuantidadeRecipes()
    return quantidadeRecipes;
  } catch {
    return thunkApi.rejectWithValue('Falha ao buscar total de registros de receitas')
  }
})

export const { resetRecipes } = QuantidadeRecipesSlice.actions
