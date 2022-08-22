import { IProduct } from './../interfaces/product.interface';
import { ICart } from './../interfaces/cart.interface';
import pool from 'index';
import authService from '@services/auth.service';
import { addFieldCounterCart } from '@utils/addFieldCounter';


class CartService {
    async getAll(refreshToken: string) {
        try {
            const user = await authService.check(refreshToken)
            const cartOwner = await pool.query<ICart>('SELECT * FROM cart where user_id = $1', [user.id])
            if(cartOwner.rows.length){
                const cartIdArray = cartOwner.rows.map((value) => value.product_id)
                const cartProducts = await pool.query(`SELECT * FROM products where id IN (${cartIdArray})`)

                return addFieldCounterCart(cartProducts.rows, cartOwner.rows)
            }
            return []
        } catch (e) {
            throw e
        }
    }

    async create(refreshToken: string, productId:number) {
        try {
            const user = await authService.check(refreshToken)
            const createdCartOwner = await pool.query('INSERT INTO cart (user_id, product_id, counter) values ($1,$2, $3) RETURNING *', [user.id, productId, 1])
            return createdCartOwner.rows[0]
        } catch (e) {
            throw e
        }
    }

    async update(refreshToken: string, productId:number, counter:number){
        try {
            const user = await authService.check(refreshToken)
            const updatedCounter = await pool.query('UPDATE cart SET counter = $1 WHERE product_id = $2 and user_id = $3 RETURNING *',[counter, productId, user.id])
            return updatedCounter.rows[0]
        } catch (e) {
            throw e
        }
    }

    async deleteOne(refreshToken: string, productId:number){
        try {
            const user = await authService.check(refreshToken)
            const deletedCart = await pool.query('DELETE FROM cart where user_id = $1 and product_id = $2 RETURNING *', [user.id, productId])
            return deletedCart.rows[0]
        } catch (e) {
            throw e
        }
    } 

    async deleteAll(refreshToken: string) {
        try {
            const user = await authService.check(refreshToken)
            await pool.query('DELETE FROM cart where user_id = $1', [user.id])
        } catch (e) {
            throw e
        } 
    }
}

export default new CartService()