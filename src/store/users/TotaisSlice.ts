import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as API from '../../api'

type TotaisSliceState = {
  totalRecipes: number,
  totalExpenses: number,
  totalInvestments: number,
  errorOnTotais?: string,
}

export const TotaisSlice = createSlice({
  name: 'totais',
  initialState: {
    totalRecipes: 0,
    totalExpenses: 0,
    totalInvestments: 0,
    errorOnTotais: undefined,
  } as TotaisSliceState,
  reducers: {
    resetTotais: (state) => {
      state.totalRecipes = 0;
      state.totalExpenses = 0;
      state.totalInvestments = 0;
    },
  },
  extraReducers: (builder) => {
    // Recipes
    builder.addCase(TotalRecipes.fulfilled, (state, {payload}) => {
      if (payload){
        state.totalRecipes = payload;
        state.errorOnTotais = undefined;
      }
    });

    builder.addCase(TotalRecipes.rejected, (state,{payload}) => {
      state.errorOnTotais = "Falha ao buscar total de receitas"
    });

    builder.addCase(TotalRecipes.pending, (state, action) => {
      state.errorOnTotais = undefined;
    });

    // Expenses
    builder.addCase(TotalExpenses.fulfilled, (state, {payload}) => {
      if (payload){
        state.totalExpenses = payload;
        state.errorOnTotais = undefined;
      }
    });

    builder.addCase(TotalExpenses.rejected, (state,{payload}) => {
      state.errorOnTotais = "Falha ao buscar total de receitas"
    });

    builder.addCase(TotalExpenses.pending, (state, action) => {
      state.errorOnTotais = undefined;
    });

    // Investments
    builder.addCase(TotalInvestments.fulfilled, (state, {payload}) => {
      if (payload){
        state.totalInvestments = payload;
        state.errorOnTotais = undefined;
      }
    });

    builder.addCase(TotalInvestments.rejected, (state,{payload}) => {
      state.errorOnTotais = "Falha ao buscar total de receitas"
    });

    builder.addCase(TotalInvestments.pending, (state, action) => {
      state.errorOnTotais = undefined;
    });

  }
})

export const TotalRecipes = createAsyncThunk(
  'recipes/getTotalRecipes',
  
  async (payload: any, thunkApi) => {
  try{
    const totalRecipes = await API.getTotalRecipes()
    return totalRecipes;
  } catch {
    return thunkApi.rejectWithValue('Falha ao buscar total de receitas')
  }
})

export const TotalExpenses = createAsyncThunk(
  'expenses/getTotalExpenses',
  
  async (payload: any, thunkApi) => {
  try{
    const totalExpenses = await API.getTotalExpenses()
    return totalExpenses;
  } catch {
    return thunkApi.rejectWithValue('Falha ao buscar total de despesas')
  }
})

export const TotalInvestments = createAsyncThunk(
  'investments/getTotalInvestments',
  
  async (payload: any, thunkApi) => {
  try{
    const totalInvestments = await API.getTotalInvestments()
    return totalInvestments;
  } catch {
    return thunkApi.rejectWithValue('Falha ao buscar total de investimentos')
  }
})