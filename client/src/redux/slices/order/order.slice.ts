import { IOrderProduct, IOrderState } from './order.interface'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {
    fetchOrder,
    deleteOrderAll,
    createOrder,
    updateOrder
} from './order.actions'

import calcTotalPrice from '@utils/calcTotalPrice'

const initialState: IOrderState = {
    loading: false,
    error: null,
    order: [],
    totalPrice: 0
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchOrder.pending.type]: (state) => {
            state.loading = true
            state.error = null
        },
        [fetchOrder.fulfilled.type]: (state, action: PayloadAction<IOrderProduct[]>) => {
            state.loading = false
            state.error = null
            state.order = action.payload
            state.totalPrice = calcTotalPrice(state.order)
        },
        [fetchOrder.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
            state.order = []
        },

        [createOrder.pending.type]: (state) => {
            state.error = null
        },
        [createOrder.fulfilled.type]: (state) => {
            state.error = null
        },
        [createOrder.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },

        [updateOrder.pending.type]: (state) => {
            state.error = null
        },
        [updateOrder.fulfilled.type]: (state) => {
            state.error = null
        },
        [updateOrder.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },

        [deleteOrderAll.pending.type]: (state) => {
            state.error = null
        },
        [deleteOrderAll.fulfilled.type]: (state) => {
            state.error = null
        },
        [deleteOrderAll.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        }
    }
})

export default orderSlice.reducer
