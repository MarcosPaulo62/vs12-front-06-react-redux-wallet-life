import { createSlice } from "@reduxjs/toolkit";
import { ListExpenses, createExpense } from "./async-actions";

type ExpensesSliceState = {
  expenses: any[],
  pagina: number,
  quantidadeRegistros: number,
  errorOnList?: string,
  valor?: number,
  creatingUser: boolean,
  errorOnCreate?: string,
  createSuccess: boolean
}

export interface Expenses {
  idUsuario: number,
  nome: string,
  idDespesa: number,
  valor: number,
  descricao: string,
}

export const ExpensesSlice = createSlice({
  name: 'expenses',
  initialState: {
    expenses: [],
    pagina: 0,
    quantidadeRegistros: 10,
    errorOnList: undefined,    
    creatingUser: false,
    errorOnCreate: undefined,
    createSuccess: false,

  } as ExpensesSliceState,
  reducers: {
    resetExpenses: (state) => {
      state.expenses = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(ListExpenses.fulfilled, (state, {payload}) => {
      if (payload){
        state.expenses = payload;
        state.errorOnList = undefined;
      }
    });

    builder.addCase(ListExpenses.rejected, (state,{payload}) => {
      state.errorOnList = "Falha ao listar as despesas"
    });

    builder.addCase(ListExpenses.pending, (state, action) => {
      state.errorOnList = undefined;
    })

    
    builder.addCase(createExpense.fulfilled, (state, { payload }) => {
      if (payload) {
        state.creatingUser = false;
        state.createSuccess = true;
        state.expenses = [...state.expenses, payload]
      }
    });
    
    builder.addCase(createExpense.rejected, (state, { payload, error }) => {
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

    builder.addCase(createExpense.pending, (state, action) => {
      state.creatingUser = true;
      state.errorOnCreate = undefined;
      state.createSuccess = false;
    })

  }
})


export const { resetExpenses } = ExpensesSlice.actions