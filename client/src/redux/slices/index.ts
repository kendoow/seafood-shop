import authSlice from './auth/auth.slice'
import productSlice from './product/products.slice'

const rootReducer = {
    auth: authSlice,
    products: productSlice
}

export default rootReducer
