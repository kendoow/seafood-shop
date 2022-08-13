import { hashSync, compareSync } from 'bcrypt'
import { IJwtPayload, IUser } from './../interfaces/auth.interface';
import pool from 'index';
import { ApiError } from 'exceptions/apiError';
import tokenService from './token.service';


class AuthService{
    async registration(user:IUser){

            try {
                const userConfirmed = await pool.query('SELECT * FROM user_account where email = $1',[user.email])
                if(userConfirmed.rows[0]){  
                    throw ApiError.BadRequest(`Пользователь с почтовым адресом ${user.email} уже существует `)
                }   
                const hashPassword = hashSync(user.password, 3)
                const createdUser  = await pool.query('INSERT INTO user_account(name, email, password, adress, phone, card) values ($1,$2, $3, $4, $5, $6) RETURNING *', 
                [user.name, user.email, hashPassword, user.adress, user.phone, user.card])  
                const tokens = tokenService.create(String(createdUser.rows[0].id), createdUser.rows[0].email)

                await tokenService.save(String(createdUser.rows[0].id), tokens.refreshToken)    

                return {...tokens, user: createdUser}
            } catch (e) {
                throw e
            }
    }


    async login(user: IUser) {
        
        try {
            const userConfirmed = await pool.query('SELECT * FROM user_account where email = $1',[user.email])
            if(!user){
                throw ApiError.BadRequest('Пользователь не был найден')
            }
            const isPassedEquals = compareSync(user.password, userConfirmed?.rows[0].password as string);
    
            if(!isPassedEquals){
                throw ApiError.BadRequest('Неверный пароль')
            }
            const refreshToken = await tokenService.exist(userConfirmed?.rows[0].id)

            if( !!refreshToken){  
                tokenService.delete(refreshToken)
            }
            
            const tokens = tokenService.create(user.email, userConfirmed?.rows[0].id as string)
            await tokenService.save(String(userConfirmed?.rows[0].id), tokens.refreshToken)
            return {
                user: userConfirmed,    
                ...tokens
            }
        } catch (e) {
            throw e
        }

    }


    async logout(refreshToken:string){
        if(!refreshToken){
            throw new Error('Нет refreshToken')
        }
        const token = await tokenService.delete(refreshToken)
        return token;
    } 

    async check(refreshToken: string){
        try {
            if(!refreshToken){
                throw new Error('Нет refreshToken')
            }
            const jwtPayload: IJwtPayload = tokenService.validRefreshToken(refreshToken)
            const userConfirm = await pool.query('SELECT * FROM user_account where id = $1',[jwtPayload.id])
            if(!userConfirm){
                throw new Error('Пользователь не зарегестрирован')
            }
            return userConfirm
        } catch (e) {
            throw e
        }
    }

    async refresh(refreshToken:string){
        try{
            if(!refreshToken){
                throw ApiError.UnauthorizedError();
            }
            const userData = tokenService.validRefreshToken(refreshToken);
            const tokenFromDb = await tokenService.findToken(refreshToken)
            
            if(!userData || !tokenFromDb){
                throw ApiError.UnauthorizedError()
            }
    
            const user = await pool.query('SELECT * FROM user_account where id = $1',[userData.id])
            const tokens = tokenService.create(user?.rows[0].email as string, String(user?.rows[0].id))
            await tokenService.save(String(user?.rows[0].id), tokens.refreshToken)
            return {
                user,
                ...tokens
            }
        } catch(e) {
        throw e        
        }
        
    }
}

export default new AuthService()