import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { fetchProducts } from './products.actions'
import { IProduct, IProductsState } from './products.interface'

const initialState: IProductsState = {
    loading: false,
    error: null,
    products: [],
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchProducts.pending.type]: (state) => {
            state.loading = true
            state.error = null
        },
        [fetchProducts.fulfilled.type]: (state, action: PayloadAction<IProduct[]>) => {
            state.loading = false
            state.error = null
            state.products = action.payload
        },
        [fetchProducts.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        },
    }
})

export default productSlice.reducer
