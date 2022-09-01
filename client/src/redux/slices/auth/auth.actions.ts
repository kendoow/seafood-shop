import { createAsyncThunk } from '@reduxjs/toolkit'

import authService from '@services/auth.service'
import {
    IUserLogin, IUserPersonal, IUserRegistration, resetData
} from './auth.interface'

export const authLogin = createAsyncThunk(
    'auth/login',
    async (userLogin: IUserLogin, { rejectWithValue }) => {
        try {
            const { email, password } = userLogin
            const user = await authService.login(email, password)
            return user
        } catch (e) {
            return rejectWithValue('Ошибка логина')
        }
    }
)

export const authRegistration = createAsyncThunk(
    'auth/registration',
    async (userRegistration: IUserRegistration, { rejectWithValue, dispatch }) => {
        try {
            const { email, password, name } = userRegistration
            const user = await authService.registration(name, email, password)
            dispatch(authLogin({ email, password }))
            return user
        } catch (e) {
            return rejectWithValue('Такой пользователь уже существует')
        }
    }
)

export const authReset = createAsyncThunk(
    'auth/reset',
    async (email: string, { rejectWithValue }) => {
        try {
            const user = await authService.reset(email)
            return user
        } catch (e) {
            return rejectWithValue(`Error Auth Reset - ${e}`)
        }
    }
)

export const authResetPassword = createAsyncThunk(
    'auth/resetPassword',
    async (data:resetData, { rejectWithValue }) => {
        try {
            const { id, password, confirmPassword } = data
            const reset = await authService.resetPassword(id, password, confirmPassword)
            return reset
        } catch (e) {
            return rejectWithValue('Ошибка!')
        }
    }
)

export const authLogout = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
            await authService.logout()
        } catch (e) {
            return rejectWithValue(`Error Auth Logout - ${e}`)
        }
    }
)

export const authRefresh = createAsyncThunk(
    'auth/refresh',
    async (_, { rejectWithValue }) => {
        try {
            const user = await authService.refresh()
            return user
        } catch (e) {
            return rejectWithValue(`Error Auth Refresh - ${e}`)
        }
    }
)

export const userUpdate = createAsyncThunk(
    'user/update',
    async (user:IUserPersonal, { rejectWithValue }) => {
        try {
            const { address, phone } = user
            const updatedUSer = await authService.update(address, phone)
            return updatedUSer
        } catch (e) {
            return rejectWithValue(`Error Auth Refresh - ${e}`)
        }
    }
)
