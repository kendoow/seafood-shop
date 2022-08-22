import {Pool} from 'pg'

import TokenSchema from "./token.query"
import UserSchema from "./user.query"
import ProductsSchema from "./products.query"
import FavoriteSchema from './favorite.query'
import CartSchema from './cart.query'
import CommentsSchema from './comments.query'
import OrderSchema from './order.query'

const initialTables = (pool:Pool) => {
    TokenSchema(pool)
    UserSchema(pool)
    ProductsSchema(pool)
    FavoriteSchema(pool)
    CartSchema(pool)
    CommentsSchema(pool)
    OrderSchema(pool)
}

export default initialTables