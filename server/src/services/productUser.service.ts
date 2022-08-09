import pool from 'index';
import tokenService from './token.service'


class ProductUserService{
    async create(userId:string){
        try {if (!userId) {
            throw new Error('Product User Service - create нет userId')
        }
        const User = await pool.query('SELECT * FROM user_account where id = $1', [userId])
        const { refreshToken }  = await pool.query('SELECT * FROM tokens where id = $1', [userId]) 

        const userData = tokenService.validRefreshToken(refreshToken)

        if (User && refreshToken && userData.id === String(userId)) {
            throw new Error('Product User Service - getAll такой пользователь не зарегистрирован')
        }

            const productCreated = await pool.query('INSERT INTO user_account(id) values ($1) RETURNING *', [userId])  
            return productCreated
        } catch (e) {
            throw e
        }
        
    }
}