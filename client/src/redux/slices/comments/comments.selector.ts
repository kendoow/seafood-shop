import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '@redux/index'

const cartState = (state: RootState) => state.comments

const commentsSelector = createSelector(cartState, (state) => state)

export default commentsSelector
