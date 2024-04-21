import { createSlice } from "@reduxjs/toolkit"

import { registerUser, loginUser, logoutUser, currentUser } from './operations'

const initialState = {
    user: {
        name: '',
        email: '',
    },
    token: '',
    isLoggedIn: false,
    isRefreshing: false,
}

const slice = createSlice({
    name: 'auth',
    initialState,
  
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.fulfilled, (state, {payload}) => {
                state.user.name = payload.user.name;
                state.user.email = payload.user.email;
                state.token = payload.token;
                state.isLoggedIn = true;

            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                state.user.name = payload.user.name;
                state.user.email = payload.user.email;
                state.token = payload.token;
                state.isLoggedIn = true;

            })
            .addCase(logoutUser.fulfilled,() => {
                return initialState;
            })
            .addCase(currentUser.fulfilled, (state, {payload}) => {
                state.user.name = payload.name;
                state.user.email = payload.email;
                state.isLoggedIn = true;
            })
          
    }
})
export const authReducer = slice.reducer
