import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '@redux/index'

const favoriteState = (state: RootState) => state.favorite

const favoriteSelector = createSelector(favoriteState, (state) => state)

export default favoriteSelector
