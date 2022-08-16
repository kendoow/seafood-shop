import { createAsyncThunk } from '@reduxjs/toolkit'

import commentsService from '@services/comments.service'
import { IComment } from './comments.interface'

export const fetchComments = createAsyncThunk(
    'comment',
    async (_, { rejectWithValue }) => {
        try {
            const products = await commentsService.get()
            return products
        } catch (e) {
            return rejectWithValue(`Error Fetch Products - ${e}`)
        }
    }
)

export const createComments = createAsyncThunk(
    'comment',
    async (comment: IComment, { rejectWithValue }) => {
        try {
            const products = await commentsService.create(comment)
            return products
        } catch (e) {
            return rejectWithValue(`Error Create Product - ${e}`)
        }
    }
)

export const updateComments = createAsyncThunk(
    'comment',
    async (comment: IComment, { rejectWithValue }) => {
        try {
            const products = await commentsService.update(comment)
            return products
        } catch (e) {
            return rejectWithValue(`Error Update Product - ${e}`)
        }
    }
)
