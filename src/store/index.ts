import { configureStore } from '@reduxjs/toolkit'
import { usersSlice } from './users/usersSlice'
import { useDispatch } from 'react-redux'
import userReducer from './UserSlice';
import { RecipesSlice } from './recipes/RecipesSlice';
import { ExpensesSlice } from './expenses/ExpensesSlice';
import { QuantidadeExpensesSlice } from './expenses/TotalExpensesSlice';


const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    user: userReducer,
    recipes: RecipesSlice.reducer,
    expenses: ExpensesSlice.reducer,
    quantidadeExpenses: QuantidadeExpensesSlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types


export default store