import api, { defaultApi } from '@http/index'
import { IFavoriteUpdate } from '@redux/slices/favorite/favorite.interface'
import { IProduct } from '@redux/slices/product/products.interface'

class FavoriteService {
    async get() {
        try {
            const response = await defaultApi.get<IProduct[]>('/favorite')

            return response.data
        } catch (e) {
            throw e
        }
    }

    async create(productId: number) {
        try {
            const response = await defaultApi.post<IProduct[]>('/favorite', { productId })

            return response.data
        } catch (e) {
            throw e
        }
    }

    async delete(productId: number) {
        try {
            const response = await defaultApi.delete<IProduct[]>('/favorite', { data: productId })

            return response.data
        } catch (e) {
            throw e
        }
    }
}

export default new FavoriteService()
