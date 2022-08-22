import { defaultApi } from '@http/index'
import { createAsyncThunk } from '@reduxjs/toolkit'
import OrderService from '../../../services/order.service'
import { IProduct } from '../product/products.interface'
import { IOrder } from './order.interface'
import { ICartProduct } from '../cart/cart.interface'

export const fetchOrder = createAsyncThunk(
    'order/fetch',
    async (_, { rejectWithValue }) => {
        try {
            const Order = await OrderService.get()
            return Order
        } catch (e) {
            return rejectWithValue(`Error Fetch Order - ${e}`)
        }
    }
)

export const createOrder = createAsyncThunk(
    'order/create',
    async (totalPrice:number, { rejectWithValue, dispatch }) => {
        try {
            await OrderService.create(totalPrice)
            dispatch(fetchOrder())
        } catch (e) {
            return rejectWithValue(`Error Create Order - ${e}`)
        }
    }
)

export const updateOrder = createAsyncThunk(
    'order/update',
    async (OrderItem: IOrder, { rejectWithValue, dispatch }) => {
        const { counter, productId } = OrderItem
        try {
            await defaultApi.put<ICartProduct[]>(`/Order/${productId}`, { productId, counter })
            dispatch(fetchOrder())
        } catch (e) {
            return rejectWithValue(`Error Create Order - ${e}`)
        }
    }
)

export const deleteOrderAll = createAsyncThunk(
    'order/deleteOne',
    async (_, { rejectWithValue, dispatch }) => {
        try {
            await defaultApi.delete<IProduct[]>('/Order')
            dispatch(fetchOrder())
        } catch (e) {
            return rejectWithValue(`Error Create Order - ${e}`)
        }
    }
)
