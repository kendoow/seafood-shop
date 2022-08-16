import pool from 'index';
import { UploadedFile } from 'express-fileupload'

import fileService from './file.service'
import { IComment, ICommentNoImage } from '@interfaces/comments.interface';


class CommentsService {
    async getAll() {
        try {
            const comments = await pool.query<IComment>('SELECT * FROM comments')
            return comments.rows
        } catch (e) {
            throw new Error(`Comments Service Error - ${e}`)
        }
    }

    async getOne(id: string) {
        try {
            if(!id){
                throw new Error("нет id"); 
            }
           
            const comment = await pool.query<IComment>('SELECT * FROM comments where id = $1', [id])
            if(!comment){
                throw new Error("неправильный id"); 
            }
            return comment.rows[0]
        } catch (e) {
            throw new Error(`Comment Service Error - ${e}`)
        }
    }

    async create(comment: ICommentNoImage, image: UploadedFile) {
        try {
            const imageName = fileService.createdFile(image)
            const createdComment = await pool.query<IComment>('INSERT INTO comments (img, title, description) values ($1,$2,$3) RETURNING *', [imageName ,comment.title ,comment.description])
            return createdComment.rows[0]
        } catch (e) {
            throw new Error(`Comments Service Error - ${e}`)
        }
    }

    async update(id: string, comment: ICommentNoImage, image: UploadedFile) {
        try {
            if(!id) {
                throw new Error("нет id"); 
            }
            const imageName = fileService.createdFile(image)
            const updatedComment = await pool.query<IComment>('UPDATE products set img = $1, title = $2, description = $3 RETURNGING *',[imageName ,comment.title ,comment.description])
            if(!updatedComment){
                throw new Error('Неправильный id')
            }
            return updatedComment.rows[0]
        } catch (e) {
            throw new Error(`Comments Service Error - ${e}`)
        }
    }

    async delete(id: string) {
        try {
            if(!id) {
                throw new Error("нет id"); 
            }
            const deletedComment = await pool.query<IComment>('DELETE FROM comments where id = $1', [id])
            if(!deletedComment){
                throw new Error('Неправильный id')
            }
            return deletedComment
        } catch (e) {
            throw new Error(`Comments Service Error - ${e}`)
        }
    }
}

export default new CommentsService()