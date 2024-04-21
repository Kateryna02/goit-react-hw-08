import { createAsyncThunk } from '@reduxjs/toolkit';
import { contactApi, setToken, clearToken } from '../../config/Api';



export const registerUser = createAsyncThunk('auth/register', async (credentials, thunkApi) => {
    try {
        const { data } = await contactApi.post('/users/signup', credentials)
        setToken(data.token)
        return data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})
export const loginUser= createAsyncThunk('auth/login', async (credentials, thunkApi) => {
    try {
        const { data } = await contactApi.post('/users/login', credentials)
        setToken(data.token)
        return data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})
export const logoutUser = createAsyncThunk('auth/logout', async (_, thunkApi) => {
    try {
        await contactApi.post('users/logout')
      clearToken()
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})
export const currentUser = createAsyncThunk('auth/current', async (_, thunkApi) => {
    const savedToken = thunkApi.getState().auth.token
    console.log(thunkApi.getState().auth);
    if (!savedToken) {
        return thunkApi.rejectWithValue('not fetch user')
    }
    setToken(savedToken)
    try {
        const { data } = await contactApi.get('/users/current');
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});





