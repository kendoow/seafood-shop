import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchComments } from './comments.actions'
import { IComment, ICommentState } from './comments.interface'

const initialState: ICommentState = {
    loading: false,
    error: null,
    comments: [],
}

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchComments.pending.type]: (state) => {
            state.loading = true
            state.error = null
        },
        [fetchComments.fulfilled.type]: (state, action: PayloadAction<IComment[]>) => {
            state.loading = false
            state.error = null
            state.comments = action.payload
        },
        [fetchComments.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        },
    }
})

export default commentsSlice.reducer
