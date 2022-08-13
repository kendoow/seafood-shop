import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '@redux/index'

const cartState = (state: RootState) => state.cart

const cartSelector = createSelector(cartState, (state) => state)

export default cartSelector
