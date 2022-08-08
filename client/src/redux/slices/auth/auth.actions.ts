import { createAsyncThunk } from '@reduxjs/toolkit'

import authService from '@services/auth.service'
import { IUserLogin, IUserRegistration } from './auth.interface'

export const authRegistration = createAsyncThunk(
    'auth/registration',
    async (userRegistration: IUserRegistration, { rejectWithValue }) => {
        try {
            const { email, password, name } = userRegistration
            const user = await authService.registration(name, email, password)
            return user
        } catch (e) {
            return rejectWithValue(`Error Auth Registration - ${e}`)
        }
    }
)

export const authLogin = createAsyncThunk(
    'auth/login',
    async (userLogin: IUserLogin, { rejectWithValue }) => {
        try {
            const { email, password } = userLogin
            const user = await authService.login(email, password)
            return user
        } catch (e) {
            return rejectWithValue(`Error Auth Login - ${e}`)
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
