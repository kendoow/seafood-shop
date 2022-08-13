import { defaultApi } from '@http/index'
import { IProduct } from '@redux/slices/product/products.interface'

class CartService {
    async get() {
        try {
            const response = await defaultApi.get<IProduct[]>('/cart')  
            return response.data
        } catch (e) {
            throw e
        }
    }

    async create(productId: number) {
        try {
            const response = await defaultApi.post<IProduct[]>('/cart', { productId })
            console.log(response.data)
            return response.data
        } catch (e) {
            throw e
        }
    }
    // c delete не работает из сервиса
}

export default new CartService()
