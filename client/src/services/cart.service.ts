import { defaultApi } from '@http/index'
import { ICartProduct } from '@redux/slices/cart/cart.interface'

class CartService {
    async get() {
        try {
            const response = await defaultApi.get<ICartProduct[]>('/cart')
            return response.data
        } catch (e) {
            throw e
        }
    }

    async create(productId: number) {
        try {
            const response = await defaultApi.post<ICartProduct[]>('/cart', {
                productId,
            })
            return response.data
        } catch (e) {
            throw e
        }
    }

    async update(productId: number, counter: number) {
        try {
            const response = await defaultApi.put<ICartProduct[]>(`/cart/${productId}`, { productId, counter })
            return response.data
        } catch (e) {
            throw e
        }
    }
    // c delete не работает из сервиса
}

export default new CartService()
