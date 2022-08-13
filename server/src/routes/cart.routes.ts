import cartController from "@controllers/cartController";

import { Router } from "express";


const cartRouter = Router()

cartRouter.get('', cartController.get)
cartRouter.post('', cartController.create)
cartRouter.delete('/:id', cartController.delete)


export default cartRouter;