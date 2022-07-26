import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {
    authLogin,
    authLogout,
    authRefresh,
    authRegistration,
    userUpdate
} from './auth.actions'
import { IAuthState, IUpdatedUser, IUser } from './auth.interface'

const initialState: IAuthState = {
    loading: false,
    error: null,
    user: {} as IUser,
    isAuth: !!localStorage.getItem('accessToken'),
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {
        [authRegistration.pending.type]: (state) => {
            state.loading = true
            state.error = null
        },
        [authRegistration.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.loading = false
            state.error = null
            state.user = action.payload
            state.isAuth = true
        },
        [authRegistration.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
            state.isAuth = false
        },

        [authLogin.pending.type]: (state) => {
            state.loading = true
            state.error = null
        },
        [authLogin.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.loading = false
            state.error = null
            state.user = action.payload
            state.isAuth = true
        },
        [authLogin.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
            state.isAuth = false
        },

        [authLogout.pending.type]: (state) => {
            state.loading = true
            state.error = null
        },
        [authLogout.fulfilled.type]: (state) => {
            state.loading = false
            state.error = null
            state.user = {} as IUser
            state.isAuth = false
        },
        [authLogout.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        },

        [authRefresh.pending.type]: (state) => {
            state.loading = true
            state.error = null
        },
        [authRefresh.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.loading = false
            state.error = null
            state.user = action.payload
            state.isAuth = true
        },
        [authRefresh.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
            state.user = {} as IUser
            state.isAuth = false
        },

        [userUpdate.pending.type]: (state) => {
            state.loading = true
            state.error = null
        },
        [userUpdate.fulfilled.type]: (state, action: PayloadAction<IUpdatedUser>) => {
            state.loading = false
            state.error = null
            state.user = action.payload
        },
        [userUpdate.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        },
    }
})

export default authSlice.reducer
