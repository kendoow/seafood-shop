import { defaultApi } from '@http/index'
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
    // c delete не работает из сервиса
}

export default new FavoriteService()
