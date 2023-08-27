import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as API from "../../api";

type InvestmentsSliceState = {
  investments: any[];
  pagina: number;
  quantidadeRegistros: number;
  errorOnList?: string;
  corretora?: string,
  creatingUser: boolean,
  errorOnCreate?: string,
  createSuccess: boolean
};


export const InvestmentsSlice = createSlice({
  name: "investments",
  initialState: {
    investments: [],
    pagina: 0,
    quantidadeRegistros: 10,
    errorOnList: undefined,
    corretora: "",
    creatingUser: false,
    errorOnCreate: undefined,
    createSuccess: false,
  } as InvestmentsSliceState,
  reducers: {
    resetInvestments: (state) => {
      state.investments = [];
    },
    resetCreateSucess: (state) => {
      state.createSuccess = false;
    }
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



    builder.addCase(createInvestment.fulfilled, (state, { payload }) => {
      if (payload) {
        state.creatingUser = false;
        state.createSuccess = true;
        state.investments = [...state.investments, payload]
      }
    });
    
    builder.addCase(createInvestment.rejected, (state, { payload, error }) => {
      if(payload){
        state.errorOnCreate = 'Receita inválida!';
        state.creatingUser = false;
        state.createSuccess = false;
      } else{
      state.errorOnCreate = 'Falha ao criar investimento!';
      state.creatingUser = false;
      state.createSuccess = false;
      }
    });

    builder.addCase(createInvestment.pending, (state, action) => {
      state.creatingUser = true;
      state.errorOnCreate = undefined;
      state.createSuccess = false;
    })
  }
    
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

  export const createInvestment  = createAsyncThunk(
    'investments/createInvestment',
    async (data: API.CreateInvestmentData, thunkApi) => {
      try{
        const invest = await API.createInvestment(data);
        return invest;
      }
      catch{
        return thunkApi.rejectWithValue('Falha ao adicionar investimento!')
      }
    }
  )