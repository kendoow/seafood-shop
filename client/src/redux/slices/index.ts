import authSlice from './auth/auth.slice'
import cartSlice from './cart/cart.slice'
import favoriteSlice from './favorite/favorite.slice'
import productSlice from './product/products.slice'

const rootReducer = {
    auth: authSlice,
    products: productSlice,
    favorite: favoriteSlice,
    cart: cartSlice
}

export default rootReducer
