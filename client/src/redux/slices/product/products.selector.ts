import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '@redux/index'

const productState = (state: RootState) => state.products

const productSelector = createSelector(productState, (state) => state)

export default productSelector
