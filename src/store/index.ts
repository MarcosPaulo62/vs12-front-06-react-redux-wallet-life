import { configureStore } from '@reduxjs/toolkit'
import { usersSlice } from './users/usersSlice'
import { useDispatch } from 'react-redux'
import userReducer from './UserSlice';
import { RecipesSlice } from './recipes/RecipesSlice';


const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    user: userReducer,
    recipes: RecipesSlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types


export default store