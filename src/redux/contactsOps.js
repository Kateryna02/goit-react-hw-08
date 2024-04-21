import { createAsyncThunk } from '@reduxjs/toolkit';

import { contactApi} from '../config/Api';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {

    try {
        const response = await contactApi.get('/contacts');
        console.log('Fetched Contacts:', response.data);
        return response.data;
           console.log('Fetched Contacts:', response.data);
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});




// // Операция для получения контактов
// export const fetchContacts = createAsyncThunk(
//     'contacts/fetchAll',
//     async (_, thunkAPI) => {
//         console.log(contacts);
//         try {
//             const token = localStorage.getItem('token'); // Получаем токен из localStorage
//             if (!token) {
//                 throw new Error('No token found'); // Если токен отсутствует, выбрасываем ошибку
//             }
//             setToken(token); // Устанавливаем токен для API-запроса
//             const response = await contactApi.get('/contacts'); // Отправляем запрос на получение контактов
//             return response.data; // Возвращаем полученные контакты
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.message); // Если произошла ошибка, возвращаем ее
//         }
//     }
// );







export const addContact = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
    console.log(contact);
    try {
        const response = await contactApi.post(baseURL, contact);
        return response.data;
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






