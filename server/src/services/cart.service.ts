import { ICart } from './../interfaces/cart.interface';
import pool from 'index';
import authService from '@services/auth.service';




class CartService {
    async getAll(refreshToken: string) {
        try {
            const user = await authService.check(refreshToken)
            const cartOwner = await pool.query<ICart>('SELECT * FROM cart where user_id = $1', [user.rows[0].id])
            if(cartOwner.rows.length){
                const cartIdArray = cartOwner.rows.map((value) => value.product_id)
                const cartProducts = await pool.query(`SELECT * FROM products where id IN (${cartIdArray})`)
                return cartProducts.rows
            }
            return []
        } catch (e) {
            throw e
        }
    }

    async create(refreshToken: string, productId:number) {
       
        try {
            const user = await authService.check(refreshToken)
            const createdCartOwner = await pool.query('INSERT INTO cart (user_id, product_id) values ($1,$2) RETURNING *', [user.rows[0].id, productId])
            return createdCartOwner.rows[0]
        } catch (e) {
            throw e
        }
    }

    async delete(refreshToken: string, productId:number){
        try {
            const user = await authService.check(refreshToken)
            const deletedCart = await pool.query('DELETE FROM cart where user_id = $1 and product_id = $2 RETURNING *', [user.rows[0].id, productId])
            return deletedCart.rows[0]
        } catch (e) {
            throw e
        }
    } 
}

export default new CartService()