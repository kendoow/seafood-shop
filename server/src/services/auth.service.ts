

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
                const createdUser  = await pool.query('INSERT INTO user_account(name, email, password) values ($1,$2, $3) RETURNING *', 
                [user.name, user.email, hashPassword ])  
                const tokens = tokenService.create(String(createdUser.rows[0].id), createdUser.rows[0].email)

                await tokenService.save(String(createdUser.rows[0].id), tokens.refreshToken)    
                
                return {...tokens, user: createdUser.rows[0]}
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

            if (await tokenService.getWithUserId( userConfirmed?.rows[0].id)) {
                await tokenService.update(userConfirmed?.rows[0].id, tokens.refreshToken)
            } else {
                await tokenService.save(String(userConfirmed?.rows[0].id), tokens.refreshToken)
            }
            
            return {
                user: userConfirmed.rows[0],    
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
            return userConfirm.rows[0]
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
                user: user.rows[0],
                ...tokens
            }
        } catch(e) {
        throw e        
        }
        
    }

    async update(refreshToken:string, address:string, phone:string){
        try {
            
            const user = await this.check(refreshToken)
            const PersonalInfo = await pool.query('UPDATE user_account SET address = $1 , phone = $2 WHERE id = $3 RETURNING *', 
            [address, phone, user.id ])
            return PersonalInfo.rows[0]
        } catch (e) {
            throw e  
        }
    }
}

export default new AuthService()