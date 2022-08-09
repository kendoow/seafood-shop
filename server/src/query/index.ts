import TokenSchema from "./token.query"
import UserSchema from "./user.query"
import {Pool} from 'pg'
import ProsuctsSchema from "./products.query"

const initialTables = (pool:Pool) => {
    TokenSchema(pool)
    UserSchema(pool)
    ProsuctsSchema(pool)
}

export default initialTables