import { createAsyncThunk } from '@reduxjs/toolkit'

import productService from '@services/products.service'
import { IProduct } from './products.interface'

export const fetchProducts = createAsyncThunk(
    'products',
    async (_, { rejectWithValue }) => {
        try {
            const products = await productService.get()
            return products
        } catch (e) {
            return rejectWithValue(`Error Fetch Products - ${e}`)
        }
    }
)

export const createProduct = createAsyncThunk(
    'products',
    async (product: IProduct, { rejectWithValue }) => {
        try {
            const products = await productService.create(product)
            return products
        } catch (e) {
            return rejectWithValue(`Error Create Product - ${e}`)
        }
    }
)

export const updateProduct = createAsyncThunk(
    'products',
    async (product: IProduct, { rejectWithValue }) => {
        try {
            const products = await productService.update(product)
            return products
        } catch (e) {
            return rejectWithValue(`Error Update Product - ${e}`)
        }
    }
)
