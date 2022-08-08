import { IAuthResponse } from '@redux/slices/auth/auth.interface'
import api from '../http'

class AuthService {
    async registration(name:string, email: string, password: string) {
        try {
            const response = await api.post<IAuthResponse>('/auth/registration', { name, email, password })
            localStorage.setItem('accessToken', response.data.accessToken)
            return response.data.user
        } catch (e) {
            throw e
        }
    }

    async login(email: string, password: string) {
        try {
            const response = await api.post<IAuthResponse>('/auth/login', { email, password })
            localStorage.setItem('accessToken', response.data.accessToken)
            return response.data.user
        } catch (e) {
            throw e
        }
    }

    async logout() {
        try {
            await api.post('/auth/logout')
            localStorage.removeItem('accessToken')
        } catch (e) {
            throw e
        }
    }

    async refresh() {
        try {
            const response = await api.get<IAuthResponse>('auth/refresh')
            localStorage.setItem('accessToken', response.data.accessToken)
            return response.data.user
        } catch (e) {
            throw e
        }
    }
}

export default new AuthService()
