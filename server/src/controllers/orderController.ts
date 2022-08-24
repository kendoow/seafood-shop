import orderService from '@services/order.service'
import { Request, Response } from 'express'


class OrderController{

    async getOne(req: Request, res: Response) {
        try {
            const { refreshToken } = req.cookies
            const orderId = +req.params.id
            const productOrder = await orderService.getOne(refreshToken, orderId)
            res.json(productOrder)
        } catch (e) {
            res.status(402).json({ message: `OrderController Error - ${e}` })
        }
    }

    async getLast(req: Request, res: Response) {
        try {
            const { refreshToken } = req.cookies
            const productOrder = await orderService.getLast(refreshToken)
            res.json(productOrder)
        } catch (e) {
            res.status(402).json({ message: `OrderController Error - ${e}` })
        }
    }

    async create(req: Request, res: Response) {
        try {
            const { refreshToken } = req.cookies
            const OrderOwner = await orderService.create(refreshToken as string, req.body.totalPrice)
            res.json(OrderOwner)
        } catch (e) {
            res.status(402).json({ message: `OrderController Error - ${e}` })
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
    async sendEmailOrder(req:Request, res:Response){
        try {
            const {refreshToken} = req.cookies

            const orderData = await orderService.sendEmailOrder(refreshToken as string)
            res.json(orderData) 
        } catch (e) {
            res.status(402).json({ message: `CartController Error - ${e}` })
        }
    }
}

export default new OrderController()
