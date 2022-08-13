import { fetchFavorite, deleteFavorite, createFavorite } from './favorite.actions'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFavoriteState } from './favorite.interface'
import { IProduct } from '../product/products.interface'

const initialState: IFavoriteState = {
    loading: false,
    error: null,
    favorite: [],
}

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchFavorite.pending.type]: (state) => {
            state.loading = true
            state.error = null
        },
        [fetchFavorite.fulfilled.type]: (state, action: PayloadAction<IProduct[]>) => {
            state.loading = false
            state.error = null
            state.favorite = action.payload
        },
        [fetchFavorite.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
            state.favorite = []
        },

        [createFavorite.pending.type]: (state) => {
            state.error = null
        },
        [createFavorite.fulfilled.type]: (state) => {
            state.error = null
        },
        [createFavorite.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },

        [deleteFavorite.pending.type]: (state) => {
            state.error = null
        },
        [deleteFavorite.fulfilled.type]: (state) => {
            state.error = null
        },
        [deleteFavorite.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
    }
})

export default favoriteSlice.reducer
