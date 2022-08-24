import authSlice from './auth/auth.slice'
import cartSlice from './cart/cart.slice'
import commentsSlice from './comments/comments.slice'
import favoriteSlice from './favorite/favorite.slice'
import orderSlice from './order/order.slice'
import productSlice from './product/products.slice'

const rootReducer = {
    auth: authSlice,
    products: productSlice,
    favorite: favoriteSlice,
    cart: cartSlice,
    comments: commentsSlice,
    order: orderSlice
}

export default rootReducer
