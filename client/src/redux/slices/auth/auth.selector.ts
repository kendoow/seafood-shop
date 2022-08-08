import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '@redux/index'

const authState = (state: RootState) => state.auth

const authSelector = createSelector(authState, (state) => state)

export default authSelector
