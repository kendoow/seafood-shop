import { ICartProduct } from '@redux/slices/cart/cart.interface'
import { defaultApi } from '@http/index'
import { createAsyncThunk } from '@reduxjs/toolkit'
import cartService from '../../../services/cart.service'
import { IProduct } from '../product/products.interface'
import { ICart } from './cart.interface'

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

export const updateCart = createAsyncThunk(
    'cart/update',
    async (cartItem: ICart, { rejectWithValue, dispatch }) => {
        const { counter, productId } = cartItem
        try {
            await defaultApi.put<ICartProduct[]>(`/cart/${productId}`, { productId, counter })
            dispatch(fetchCart())
        } catch (e) {
            return rejectWithValue(`Error Create Cart - ${e}`)
        }
    }
)

export const deleteCartItem = createAsyncThunk(
    'cart/deleteOne',
    async (productId:number, { rejectWithValue, dispatch }) => {
        try {
            await defaultApi.delete<IProduct[]>(`/cart/${productId}`)
            dispatch(fetchCart())
        } catch (e) {
            return rejectWithValue(`Error Create Cart - ${e}`)
        }
    }
)

export const deleteCartAll = createAsyncThunk(
    'cart/deleteOne',
    async (_, { rejectWithValue, dispatch }) => {
        try {
            await defaultApi.delete<IProduct[]>('/cart')
            dispatch(fetchCart())
        } catch (e) {
            return rejectWithValue(`Error Create Cart - ${e}`)
        }
    }
)
