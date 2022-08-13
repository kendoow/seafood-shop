import { IProduct } from './../interfaces/product.interface';
import pool from 'index';
import authService from '@services/auth.service';
import { IFavorite } from '@interfaces/favorite.interface';



class FavoriteService {
    async getAll(refreshToken: string) {
        try {
            const user = await authService.check(refreshToken)
            const favoriteOwner = await pool.query<IFavorite>('SELECT * FROM favorite where user_id = $1', [user.rows[0].id])
            if(favoriteOwner.rows.length){
                const favoriteIdArray = favoriteOwner.rows.map((value) => value.product_id)
                const favoriteProducts = await pool.query(`SELECT * FROM products where id IN (${favoriteIdArray})`)
                return favoriteProducts.rows
            }
            return []
        } catch (e) {
            throw e
        }
    }

    async create(refreshToken: string, productId:number) {
       
        try {
            const user = await authService.check(refreshToken)
            const createdFavoriteOwner = await pool.query('INSERT INTO favorite (user_id, product_id) values ($1,$2) RETURNING *', [user.rows[0].id, productId])
            return createdFavoriteOwner.rows[0]
        } catch (e) {
            throw e
        }
    }

    async delete(refreshToken: string, productId:number){
        try {
            const user = await authService.check(refreshToken)
            const deletedFavorite = await pool.query('DELETE FROM favorite where user_id = $1 and product_id = $2 RETURNING *', [user.rows[0].id, productId])
            return deletedFavorite.rows[0]
        } catch (e) {
            throw e
        }
    } 
}

export default new FavoriteService()