import { IOrder, IOrderState } from './order.interface'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {
    deleteOrderAll,
    createOrder,
    fetchOneOrder
} from './order.actions'

const initialState: IOrderState = {
    loading: false,
    error: null,
    order: {} as IOrder,
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchOneOrder.pending.type]: (state) => {
            state.loading = true
            state.error = null
        },
        [fetchOneOrder.fulfilled.type]: (state, action: PayloadAction<IOrder>) => {
            state.loading = false
            state.error = null
            state.order = action.payload
        },
        [fetchOneOrder.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
            state.order = {} as IOrder
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
