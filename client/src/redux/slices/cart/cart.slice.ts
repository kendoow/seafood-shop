import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {
    fetchCart,
    deleteCart,
    createCart,
    updateCart
} from './cart.actions'

import calcTotalPrice from '@utils/calcTotalPrice'
import { ICartState, ICartProduct } from './cart.interface'

const initialState: ICartState = {
    loading: false,
    error: null,
    cart: [],
    totalPrice: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCart.pending.type]: (state) => {
            state.loading = true
            state.error = null
        },
        [fetchCart.fulfilled.type]: (state, action: PayloadAction<ICartProduct[]>) => {
            state.loading = false
            state.error = null
            state.cart = action.payload
            state.totalPrice = calcTotalPrice(state.cart)
        },
        [fetchCart.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
            state.cart = []
        },

        [createCart.pending.type]: (state) => {
            state.error = null
        },
        [createCart.fulfilled.type]: (state) => {
            state.error = null
        },
        [createCart.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },

        [updateCart.pending.type]: (state) => {
            state.error = null
        },
        [updateCart.fulfilled.type]: (state) => {
            state.error = null
        },
        [updateCart.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },

        [deleteCart.pending.type]: (state) => {
            state.error = null
        },
        [deleteCart.fulfilled.type]: (state) => {
            state.error = null
        },
        [deleteCart.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
    }
})

export default cartSlice.reducer
