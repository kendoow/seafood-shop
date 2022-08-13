import { defaultApi } from '@http/index'

import { IProduct } from '@redux/slices/product/products.interface'

class ProductService {
    async get() {
        try {
            const response = await defaultApi.get<IProduct[]>('/products')
            return response.data
        } catch (e) {
            throw e
        }
    }

    async create(product: IProduct) { // не использую
        try {
            const response = await defaultApi.post<IProduct[]>('/products', product)
            return response.data
        } catch (e) {
            throw e
        }
    }

    async update(product: IProduct) { // не использую
        try {
            const response = await defaultApi.put<IProduct[]>('/products', product)
            return response.data
        } catch (e) {
            throw e
        }
    }
}

export default new ProductService()
