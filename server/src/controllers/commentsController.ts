import { Request, Response } from 'express'
import { UploadedFile } from "express-fileupload"
import commentsService from '@services/comments.service'

class CommentsController{
    async getAll(req: Request, res: Response) {
        try {
            const comments = await commentsService.getAll()
            res.json(comments)
        } catch (e) {
            res.status(400).json({ message: `Products Controller Error - ${e}` })
        }
    }

    async getOne(req: Request, res: Response) {
        try {
            const comments = await commentsService.getOne(req.body.id)
            res.json(comments)
        } catch (e) {
            res.status(400).json({ message: `Products Controller Error - ${e}` })
        }
    }

    async create(req: Request, res: Response) {
       
        try {
            
            const createdComment = await commentsService.create(req.body, req.files?.img as UploadedFile)
            
            res.json(createdComment)
        } catch (e) {
            res.status(400).json({ message: `Products Controller Error - ${e}` })
        }
    }

    async update(req: Request, res: Response) {
        try {
            const updatedComment = await commentsService.update(req.params.id, req.body, req.files?.image as UploadedFile)
            res.json(updatedComment)
        } catch (e) {
            res.status(400).json({ message: `Comment Controller Error - ${e}` })
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const deletedComment = await commentsService.delete(req.params.id)
            res.json(deletedComment)
        } catch (e) {
            res.status(400).json({ message: `Comment Controller Error - ${e}` })
        }
    }
}

export default new CommentsController()
