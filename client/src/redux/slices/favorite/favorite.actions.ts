import { defaultApi } from '@http/index'
import { createAsyncThunk } from '@reduxjs/toolkit'
import favoriteService from '../../../services/favorite.service'
import { IProduct } from '../product/products.interface'

export const fetchFavorite = createAsyncThunk(
    'favorite/fetch',
    async (_, { rejectWithValue }) => {
        try {
            const favorite = await favoriteService.get()
            return favorite
        } catch (e) {
            return rejectWithValue(`Error Fetch Favorite - ${e}`)
        }
    }
)

export const createFavorite = createAsyncThunk(
    'favorite/create',
    async (productId:number, { rejectWithValue, dispatch }) => {
        try {
            await favoriteService.create(productId)
            dispatch(fetchFavorite())
        } catch (e) {
            return rejectWithValue(`Error Create Favorite - ${e}`)
        }
    }
)

export const deleteFavorite = createAsyncThunk(
    'favorite/delete',
    async (productId:number, { rejectWithValue, dispatch }) => {
        try {
            await defaultApi.delete<IProduct[]>(`/favorite/${productId}`)
            dispatch(fetchFavorite())
        } catch (e) {
            return rejectWithValue(`Error Create Favorite - ${e}`)
        }
    }
)
