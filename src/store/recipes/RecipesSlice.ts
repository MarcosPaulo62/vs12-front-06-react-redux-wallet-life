import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as API from '../../api'

type RecipesSliceState = {
  recipes: Recipes[],
  pagina: number,
  quantidadeRegistros: number,
  errorOnList?: string,
}

export interface Recipes {
  idUsuario: number,
  nome: string,
  idReceita: number,
  valor: number,
  descricao: string,
  banco: string
}

export const RecipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    recipes: [],
    pagina: 0,
    quantidadeRegistros: 10,
    errorOnList: undefined,
  } as RecipesSliceState,
  reducers: {
    resetRecipes: (state) => {
      state.recipes = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(ListRecipes.fulfilled, (state, {payload}) => {
      if (payload){
        state.recipes = payload;
        state.errorOnList = undefined;
      }
    });

    builder.addCase(ListRecipes.rejected, (state,{payload}) => {
      state.errorOnList = "Falha ao listar as receitas"
    });

    builder.addCase(ListRecipes.pending, (state, action) => {
      state.errorOnList = undefined;
    })

  }
})

export const ListRecipes = createAsyncThunk(
  'recipes/getRecipes',
  
  async (payload: any, thunkApi) => {
    try{
      const recipes = await API.getRecipes(payload.pagina, payload.quantidadeRegistros)
      return recipes;
    } catch {
      return thunkApi.rejectWithValue('Falha ao buscar receitas')
    }
  })