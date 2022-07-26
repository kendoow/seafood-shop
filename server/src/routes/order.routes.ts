import orderController from "@controllers/orderController";

import { Router } from "express";


const orderRouter = Router()

orderRouter.get('/:id', orderController.getOne)
orderRouter.get('', orderController.getLast)
orderRouter.post('', orderController.create)
orderRouter.delete('/:id', orderController.deleteOne)
orderRouter.delete('', orderController.deleteAll)


export default orderRouter;