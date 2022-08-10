import api from '@http/index'
import { IProduct } from '@redux/slices/product/products.interface'

class ProductService {
    async get() {
        try {
            const response = await api.get<IProduct[]>('/products')
            console.log(response.data)
            return response.data
        } catch (e) {
            throw e
        }
    }

    async create(product: IProduct) {
        try {
            const response = await api.post<IProduct[]>('/products', product)
            return response.data
        } catch (e) {
            throw e
        }
    }

    async update(product: IProduct) {
        try {
            const response = await api.put<IProduct[]>('/products', product)
            return response.data
        } catch (e) {
            throw e
        }
    }
}

export default new ProductService()
