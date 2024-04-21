import { createAsyncThunk } from '@reduxjs/toolkit';

import { contactApi } from '../config/Api';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {

    try {
        const {data} = await contactApi.get('/contacts');
        console.log('Fetched Contacts:', data);
        return data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});



export const addContact = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
    console.log(contact);
    try {
        const {data} = await contactApi.post(baseURL, contact);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, thunkAPI) => {
    try {
        await contactApi.delete(`${baseURL}/${contactId}`);
        return contactId;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});






