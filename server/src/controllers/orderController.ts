import orderService from '@services/order.service'
import { Request, Response } from 'express'


class OrderController{
    async get(req: Request, res: Response) {
        try {
            const { refreshToken } = req.cookies
            const CartOwner = await orderService.getAll(refreshToken as string)
            res.json(CartOwner)
        } catch (e) {
            res.status(402).json({ message: `OrderController Error - ${e}` })
        }
    }

    async create(req: Request, res: Response) {
        try {
            const { refreshToken } = req.cookies
            const CartOwner = await orderService.create(refreshToken as string)
            res.json(CartOwner)
        } catch (e) {
            res.status(401).json({ message: `OrderController Error - ${e}` })
        }
    }

    async deleteOne(req:Request, res:Response){
        try{
            const {refreshToken} = req.cookies
            const CartOwner = await orderService.deleteOne(refreshToken as string, +req.params.id)
            res.json(CartOwner)
        } catch (e){
            res.status(402).json({ message: `CartController Error - ${e}` })
        }
    }
 
    async deleteAll(req:Request, res:Response){
        try {
            const {refreshToken} = req.cookies
            const CartOwner = await orderService.deleteAll(refreshToken as string)
            res.json(CartOwner) 
        } catch (e) {
            res.status(402).json({ message: `CartController Error - ${e}` })
        }
    }
}

export default new OrderController()
