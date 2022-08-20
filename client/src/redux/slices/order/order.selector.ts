import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '@redux/index'

const orderState = (state: RootState) => state.order

const orderSelector = createSelector(orderState, (state) => state)

export default orderSelector
