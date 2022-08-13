import { defaultApi } from '@http/index'
import { createAsyncThunk } from '@reduxjs/toolkit'
import cartService from '../../../services/cart.service'
import { IProduct } from '../product/products.interface'

export const fetchCart = createAsyncThunk(
    'cart/fetch',
    async (_, { rejectWithValue }) => {
        try {
            const cart = await cartService.get()
            return cart
        } catch (e) {
            return rejectWithValue(`Error Fetch Cart - ${e}`)
        }
    }
)

export const createCart = createAsyncThunk(
    'cart/create',
    async (productId:number, { rejectWithValue, dispatch }) => {
        try {
            await cartService.create(productId)
            dispatch(fetchCart())
        } catch (e) {
            return rejectWithValue(`Error Create Cart - ${e}`)
        }
    }
)

export const deleteCart = createAsyncThunk(
    'cart/delete',
    async (productId:number, { rejectWithValue, dispatch }) => {
        try {
            await defaultApi.delete<IProduct[]>(`/cart/${productId}`)
            dispatch(fetchCart())
        } catch (e) {
            return rejectWithValue(`Error Create Cart - ${e}`)
        }
    }
)
