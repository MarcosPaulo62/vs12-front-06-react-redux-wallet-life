import { configureStore } from '@reduxjs/toolkit'
import { usersSlice } from './users/usersSlice'
import { useDispatch } from 'react-redux'
import userReducer from './UserSlice';
import { RecipesSlice } from './recipes/RecipesSlice';
import { ExpensesSlice } from './expenses/ExpensesSlice';
import { InvestmentsSlice } from './investments/InvestmentsSlice';
import { QuantidadeExpensesSlice } from './expenses/QuantidadeExpensesSlice';
import { QuantidadeRecipesSlice } from './recipes/QuantidadeRecipesSlice';
import { QuantidadeInvestmentsSlice } from './investments/QuantidadeInvestmentsSlice';
import { TotaisSlice } from './users/TotaisSlice';


const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    user: userReducer,
    recipes: RecipesSlice.reducer,
    expenses: ExpensesSlice.reducer,
    investments: InvestmentsSlice.reducer,
    quantidadeExpenses: QuantidadeExpensesSlice.reducer,
    quantidadeRecipes: QuantidadeRecipesSlice.reducer,
    quantidadeInvestments: QuantidadeInvestmentsSlice.reducer,
    totais: TotaisSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types


export default store