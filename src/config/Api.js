import axios from "axios";

export const contactApi = axios.create({
    baseURL: 'https://connections-api.herokuapp.com'
});
export const setToken = token => {
    contactApi.defaults.headers.common.Authorization = `Bearer ${token}`
}
export const clearToken = () => {
    contactApi.defaults.headers.common.Authorization = ``
}