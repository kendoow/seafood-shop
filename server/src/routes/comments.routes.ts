import commentsController from "@controllers/commentsController";
import { Router } from "express";


const commentsRouter = Router()


commentsRouter.get('', commentsController.getAll)
commentsRouter.get('/:id', commentsController.getOne)
commentsRouter.post('', commentsController.create)
commentsRouter.put('/:id', commentsController.update)
commentsRouter.delete('/:id', commentsController.delete)


export default commentsRouter;
