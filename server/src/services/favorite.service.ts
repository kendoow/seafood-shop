import { IProduct } from './../interfaces/product.interface';
import pool from 'index';
import authService from '@services/auth.service';



class FavoriteService {
    async getAll(refreshToken: string) {
        try {
            const user = await authService.check(refreshToken)
            const favoriteOwner = await pool.query('SELECT * FROM favorite where id = $1', [user.rows[0].id]) // ?????????
            return favoriteOwner
        } catch (e) {
            throw e
        }
    }

    async create(refreshToken: string) {
        try {
            const user = await authService.check(refreshToken)
            const createdFavoriteOwner = await pool.query('INSERT INTO favorite (user_id) values ($1) RETURNING *', [user.rows[0].id])
            return createdFavoriteOwner
        } catch (e) {
            throw e
        }
    }

    async update(refreshToken: string, favoriteProduct: IProduct) {
        try {
            const user = await authService.check(refreshToken)
            const updatedProductFavorite = await pool.query('UPDATE favorite set user_id = $1, product_id = $2 RETURNGING *',[user.rows[0].id, favoriteProduct.id])
            return updatedProductFavorite
        } catch (e) {
            throw e
        }
    }
}

export default new FavoriteService()