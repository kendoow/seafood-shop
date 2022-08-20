import { IProduct } from './../interfaces/product.interface';
import { IOrder } from './../interfaces/order.interface';
import pool from 'index';
import authService from '@services/auth.service';
import addFieldCounter from '@utils/addFieldCounter';


class OrderService {
    async getAll(refreshToken: string) {
        try {
            const user = await authService.check(refreshToken)
           
            const orderOwner = await pool.query<IOrder>('SELECT * FROM order_table where user_id = $1', [user.rows[0].id])
            if(orderOwner.rows.length){
                const orderIdArray = orderOwner.rows.map((value) => value.product_id)
                const orderProducts = await pool.query(`SELECT * FROM products where id IN (${orderIdArray})`)

                return addFieldCounter(orderProducts.rows, orderOwner.rows)
            }
            return []
        } catch (e) {
            throw e
        }
    }

    async create(refreshToken: string) {
        try {
            
            const user = await authService.check(refreshToken)
            const cartData = await pool.query('SELECT * FROM cart')
            const OrderList = await pool.query('INSERT INTO cart (user_id, product_id, counter) values ($1,$2, $3) RETURNING *', [user.rows[0].id, cartData.rows[0].product_id, cartData.rows[0].counter,]) 
            return OrderList.rows[0]
        } catch (e) {
            throw e
        }
    }

    async deleteAll(refreshToken: string) {
        try {
            const user = await authService.check(refreshToken)
            await pool.query('DELETE FROM order_table where user_id = $1 RETURNING *', [user.rows[0].id])
        } catch (e) {
            throw e
        } 
    }

    async deleteOne(refreshToken: string, productId:number){
        try {
            const user = await authService.check(refreshToken)
            const deletedorder = await pool.query('DELETE FROM order_table where user_id = $1 and product_id = $2 RETURNING *', [user.rows[0].id, productId])
            return deletedorder.rows[0]
        } catch (e) {
            throw e
        }
    } 
}

export default new OrderService()
