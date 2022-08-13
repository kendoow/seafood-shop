import { fetchCart, deleteCart, createCart } from './cart.actions'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICartState } from './cart.interface'
import { IProduct } from '../product/products.interface'
import calcTotalPrice from '@utils/calcTotalPrice'

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
        [fetchCart.fulfilled.type]: (state, action: PayloadAction<IProduct[]>) => {
            state.loading = false
            state.error = null
            state.totalPrice = calcTotalPrice(state.cart)
            state.cart = action.payload
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
