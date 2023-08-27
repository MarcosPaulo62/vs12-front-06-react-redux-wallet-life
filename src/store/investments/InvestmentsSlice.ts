import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as API from "../../api";

type InvestmentsSliceState = {
  investments: Investments[];
  pagina: number;
  quantidadeRegistros: number;
  errorOnList?: string;
  corretora?: string
};

export interface Investments {
  idUsuario: number;
  nome: string;
  idInvestimento: number;
  valor: number;
  descricao: string;
  corretora?: string;
}

export const InvestmentsSlice = createSlice({
  name: "investments",
  initialState: {
    investments: [],
    pagina: 0,
    quantidadeRegistros: 10,
    errorOnList: undefined,
    corretora: ""
  } as InvestmentsSliceState,
  reducers: {
    resetInvestments: (state) => {
      state.investments = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(ListInvestments.fulfilled, (state, { payload }) => {
      if (payload) {
        state.investments = payload;
        state.errorOnList = undefined;
      }
    });

    builder.addCase(ListInvestments.rejected, (state, { payload }) => {
      state.errorOnList = "Falha ao listar os investimentos";
    });

    builder.addCase(ListInvestments.pending, (state, action) => {
      state.errorOnList = undefined;
    });
  },
});

export const ListInvestments = createAsyncThunk(
  'investments/getInvestments',
  
  async (payload: any, thunkApi) => {
    try{
      const investments = await API.getInvestments(payload.pagina, payload.quantidadeRegistros, payload.corretora)
      return investments;
    } catch {
      return thunkApi.rejectWithValue('Falha ao buscar investimentos')
    }
  })
