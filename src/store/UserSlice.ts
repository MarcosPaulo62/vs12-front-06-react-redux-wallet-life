import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface UserState {
    loading: boolean;
    user: string | null;
    error: string | null;
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
}

const initialState: UserState = {
    loading: false,
    user: null,
    error: null,
    status: 'idle'
};

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async(userCredentials: any)=>{
        const request = await axios.post('http://vemser-hml.dbccompany.com.br:39000/guilherme-militao/vemser-tf-04-security/auth', userCredentials);
        const response = await request.data;
        localStorage.setItem('user', response);
        return response;
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(loginUser.pending,(state)=>{
            state.loading = true;
            state.user = null;
            state.error = null;
            state.status = 'pending';
        })
        .addCase(loginUser.fulfilled,(state, action)=>{
            state.loading = false;
            state.user = action.payload;
            state.error = null;
            state.status = 'fulfilled';
        })
        .addCase(loginUser.rejected, (state,action)=>{
            state.loading = false;
            state.user = null;
            console.log(action.error.message);
            if(action.error.message === 'Request failed with status code 401'){
                state.error = 'Access Denied! Invalid Credentials';
            } else {
                state.error = 'An error occurred';
            }
            state.status = 'rejected';
        })
    }

});

export default userSlice.reducer; 