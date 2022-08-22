import orderController from "@controllers/orderController";

import { Router } from "express";


const orderRouter = Router()

orderRouter.get('', orderController.get)
orderRouter.get('/:id', orderController.getOne)
orderRouter.post('', orderController.create)
orderRouter.delete('/:id', orderController.deleteOne)
orderRouter.delete('', orderController.deleteAll)


export default orderRouter;