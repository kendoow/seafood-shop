import cartService from '@services/cart.service'
import { Request, Response } from 'express'


class CartController{
    async get(req: Request, res: Response) {
        try {
            const { refreshToken } = req.cookies
            const CartOwner = await cartService.getAll(refreshToken as string)
            res.json(CartOwner)
        } catch (e) {
            res.status(402).json({ message: `CartController Error - ${e}` })
        }
    }

    async create(req: Request, res: Response) {
        try {
            const { refreshToken } = req.cookies
            const CartOwner = await cartService.create(refreshToken as string, req.body.productId)
            res.json(CartOwner)
        } catch (e) {
            res.status(402).json({ message: `CartController Error - ${e}` })
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { refreshToken } = req.cookies
            const CartOwner = await cartService.update(refreshToken as string, req.body.productId, req.body.counter)
            res.json(CartOwner)
        } catch (e) {
            res.status(402).json({ message: `CartController Error - ${e}` })
        }
    }

    async deleteOne(req:Request, res:Response){
        try{
            const {refreshToken} = req.cookies
            const CartOwner = await cartService.deleteOne(refreshToken as string, +req.params.id)
            res.json(CartOwner)
        } catch (e){
            res.status(402).json({ message: `CartController Error - ${e}` })
        }
    }

    async deleteAll(req:Request, res:Response){
        try {
            const {refreshToken} = req.cookies
            const CartOwner = await cartService.deleteAll(refreshToken as string)
            res.json(CartOwner) 
        } catch (e) {
            res.status(402).json({ message: `CartController Error - ${e}` })
        }
    }
}

export default new CartController()
