import productsController from "@controllers/productsController";
import { Router } from "express";

const productRouter = Router()


productRouter.get('', productsController.getAll)
productRouter.get('/:id', productsController.getOne)
productRouter.post('', productsController.create)
productRouter.put('/:id', productsController.update)
productRouter.delete('/:id', productsController.delete)
