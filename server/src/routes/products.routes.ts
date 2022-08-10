import productsController from "@controllers/productsController";
import { Router } from "express";


const productsRouter = Router()


productsRouter.get('', productsController.getAll)
productsRouter.get('/:id', productsController.getOne)
productsRouter.post('', productsController.create)
productsRouter.put('/:id', productsController.update)
productsRouter.delete('/:id', productsController.delete)


export default productsRouter;