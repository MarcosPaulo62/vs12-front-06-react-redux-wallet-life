import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as API from '../../api'

type QuantidadeInvestmentsSliceState = {
  quantidadeInvestments: number,
  errorOnQtd?: string,
}

export const QuantidadeInvestmentsSlice = createSlice({
  name: 'quantidadeInvestments',
  initialState: {
    quantidadeInvestments: 0,
    errorOnQtd: undefined,
  } as QuantidadeInvestmentsSliceState,
  reducers: {
    resetInvestments: (state) => {
      state.quantidadeInvestments = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(QuantidadeInvestments.fulfilled, (state, {payload}) => {
      if (payload){
        state.quantidadeInvestments = payload;
        state.errorOnQtd = undefined;
      }
    });

    builder.addCase(QuantidadeInvestments.rejected, (state,{payload}) => {
      state.errorOnQtd = "Falha ao listar os investimentos"
    });

    builder.addCase(QuantidadeInvestments.pending, (state, action) => {
      state.errorOnQtd = undefined;
    })

  }
})

export const QuantidadeInvestments = createAsyncThunk(
  'investments/getQuantidadeInvestments',
  
  async (payload: any, thunkApi) => {
  try{
    const quantidadeInvestments = await API.getQuantidadeInvestments()
    return quantidadeInvestments;
  } catch {
    return thunkApi.rejectWithValue('Falha ao buscar total de registros de investimentos')
  }
})
