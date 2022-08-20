import { defaultApi } from '@http/index'
import { ICartProduct } from '@redux/slices/cart/cart.interface'

class OrderService {
    async get() {
        try {
            const response = await defaultApi.get<ICartProduct[]>('/order')
            return response.data
        } catch (e) {
            throw e
        }
    }

    async create() {
        try {
            const response = await defaultApi.post<ICartProduct[]>('/order')
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

    async deleteAll() {
        try {
            const response = await defaultApi.delete<ICartProduct[]>('/order')
            return response.data
        } catch (e) {
            throw e
        }
    }
}

export default new OrderService()
