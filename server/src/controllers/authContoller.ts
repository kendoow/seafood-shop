import pool from '@models/db'
import authService from '@services/auth.service'
import { Request, Response } from 'express'

class AuthController {
    async registration(req:Request, res:Response){
        try {
          
            const createdUser = await authService.registration(req.body)
            
            res.cookie('refreshToken', createdUser.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
            res.json(createdUser)
        } catch (e) {
            res.status(401).json({ message: `Auth Controller Error - ${e}` })
        }
    }

    async login(req:Request, res:Response){
        try {
            const user = await authService.login(req.body)
            res.cookie('refreshToken', user.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
            res.json(user)
        } catch (e) {
            res.status(401).json({ message: `Auth Controller Error - ${e}` })
        }
    }

    async logout(req:Request, res:Response,){
        try {
        const {refreshToken} = req.cookies;
        const token = await authService.logout(refreshToken)
        res.clearCookie('refreshToken');
        return res.json(token)
        } catch (e) {
            res.status(401).json({ message: `Auth Controller Error - ${e}` })
        }
        
    }

    async refresh( req:Request, res:Response    ){
        try {
            const {refreshToken} = req.cookies;
            const userData = await authService.refresh(refreshToken)
            res.cookie('refreshToken', userData.refreshToken, {maxAge:30*24*60*60*1000, httpOnly:true}) // 30d for refresh in cookie
            return res.json(userData)
        } catch (e) {
            res.status(401).json({ message: `Auth Controller Error - ${e}` })
        }
    }

}


export default new AuthController()