import favoriteController from "@controllers/favoriteController";

import { Router } from "express";


const favoriteRouter = Router()

favoriteRouter.get('', favoriteController.get)
favoriteRouter.post('', favoriteController.create)
favoriteRouter.delete('/:id', favoriteController.delete)


export default favoriteRouter;