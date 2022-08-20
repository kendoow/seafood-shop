import cartController from "@controllers/cartController";

import { Router } from "express";


const cartRouter = Router()

cartRouter.get('', cartController.get)
cartRouter.post('', cartController.create)
cartRouter.put('/:id', cartController.update)
cartRouter.delete('/:id', cartController.deleteOne)
cartRouter.delete('', cartController.deleteAll)

export default cartRouter;