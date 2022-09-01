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

    async resetPassword(id:string, password:string, confirmPassword:string) {
        try {
            const response = await api.post<IAuthResponse>(`/auth/reset/${id}`, { password, confirmPassword })
            console.log(response.data)
            return response.data
        } catch (e) {
            throw e
        }
    }

    async reset(email: string) {
        try {
            const response = await api.post<IAuthResponse>('/auth/reset', { email })
            return response.data.user.email
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

    async update(address:string, phone:string) {
        try {
            const response = await api.put<IAuthResponse>('auth/update', { address, phone })
            return response.data
        } catch (e) {
            throw e
        }
    }
}

export default new AuthService()
