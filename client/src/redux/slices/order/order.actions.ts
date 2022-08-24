import { defaultApi } from '@http/index'
import { createAsyncThunk } from '@reduxjs/toolkit'
import OrderService from '../../../services/order.service'
import { IProduct } from '../product/products.interface'

export const fetchOneOrder = createAsyncThunk(
    'order/fetch',
    async (_, { rejectWithValue }) => {
        try {
            const Order = await OrderService.getLast()
            return Order
        } catch (e) {
            return rejectWithValue(`Error Fetch Order - ${e}`)
        }
    }
)

export const createOrder = createAsyncThunk(
    'order/create',
    async (totalPrice:number, { rejectWithValue }) => {
        try {
            await OrderService.create(totalPrice)
        } catch (e) {
            return rejectWithValue(`Error Create Order - ${e}`)
        }
    }
)

export const deleteOrderAll = createAsyncThunk(
    'order/deleteOne',
    async (_, { rejectWithValue }) => {
        try {
            await defaultApi.delete<IProduct[]>('/Order')
        } catch (e) {
            return rejectWithValue(`Error Create Order - ${e}`)
        }
    }
)
