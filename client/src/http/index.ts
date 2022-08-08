import API_URL from '@constants/enviroment'
import axios, { AxiosRequestConfig } from 'axios'

const api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
})

api.interceptors.request.use((config: AxiosRequestConfig) => {
    if (config && config.headers) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
    }
    return config
})

export default api
