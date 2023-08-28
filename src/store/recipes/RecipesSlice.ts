import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as API from '../../api'

type RecipesSliceState = {
  recipes: any[],
  pagina: number,
  quantidadeRegistros: number,
  errorOnList?: string,
  valor?: number,
  creatingUser: boolean,
  errorOnCreate?: string,
  createSuccess: boolean
}



export const RecipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    recipes: [],
    pagina: 0,
    quantidadeRegistros: 10,
    errorOnList: undefined,
    creatingUser: false,
    errorOnCreate: undefined,
    createSuccess: false,
  } as RecipesSliceState,
  reducers: {
    resetRecipes: (state) => {
      state.recipes = [];
    },
    resetCreateSucess: (state) => {
      state.createSuccess = false;
    }
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

    builder.addCase(createRecipe.fulfilled, (state, { payload }) => {
      if (payload) {
        state.creatingUser = false;
        state.createSuccess = true;
        state.recipes = [...state.recipes, payload]
      }
    });
    
    builder.addCase(createRecipe.rejected, (state, { payload, error }) => {
      if(payload){
        state.errorOnCreate = 'Receita inválida!';
        state.creatingUser = false;
        state.createSuccess = false;
      } else{
      state.errorOnCreate = 'Falha ao criar receita!';
      state.creatingUser = false;
      state.createSuccess = false;
      }
    });

    builder.addCase(createRecipe.pending, (state, action) => {
      state.creatingUser = true;
      state.errorOnCreate = undefined;
      state.createSuccess = false;
    })
  }
})

export const ListRecipes = createAsyncThunk(
  'recipes/getRecipes',
  
  async (payload: any, thunkApi) => {
    try{
      const recipes = await API.getRecipes(payload.pagina, payload.quantidadeRegistros, payload?.valor)
      return recipes;
    } catch {
      return thunkApi.rejectWithValue('Falha ao buscar receitas')
    }
  })

  export const createRecipe  = createAsyncThunk(
    'recipes/createRecipe',
    async (data: API.CreateRecipeData, thunkApi) => {
      try{
        const recipe = await API.createRecipe(data);
        return recipe;
      }
      catch{
        return thunkApi.rejectWithValue('Falha ao adicionar receita!')
      }
    }
  )


