import { defaultApi } from '@http/index'
import { IComment } from '@redux/slices/comments/comments.interface'

import { IProduct } from '@redux/slices/product/products.interface'

class CommentsService {
    async get() {
        try {
            const response = await defaultApi.get<IComment[]>('/comments')
            return response.data
        } catch (e) {
            throw e
        }
    }

    async create(comment: IComment) { // не использую
        try {
            const response = await defaultApi.post<IComment[]>('/comments', comment)
            return response.data
        } catch (e) {
            throw e
        }
    }

    async update(comment: IComment) { // не использую
        try {
            const response = await defaultApi.put<IComment[]>('/comments', comment)
            return response.data
        } catch (e) {
            throw e
        }
    }
}

export default new CommentsService()
