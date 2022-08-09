import { IProductNoImage } from 'interfaces/product.interface';
import { IProduct } from 'interfaces/product.interface';
import pool from 'index';
import { UploadedFile } from 'express-fileupload'

import fileService from './file.service'


class ProductService {
    async getAll() {
        try {
            const products = await pool.query<IProduct>('SELECT * FROM products')
            return products
        } catch (e) {
            throw new Error(`Product Service Error - ${e}`)
        }
    }

    async getOne(id: string) {
        try {
            if(!id){
                throw new Error("нет id"); 
            }
           
            const product = await  pool.query<IProduct>('SELECT * FROM products where id = $1', [id])
            if(!product){
                throw new Error("неправильный id"); 
            }
            return product.rows[0]
        } catch (e) {
            throw new Error(`Product Service Error - ${e}`)
        }
    }

    async create(product: IProductNoImage, image: UploadedFile) {
        try {
            const imageName = fileService.createdFile(image)
            const createdProduct = await pool.query<IProduct>('INSERT INTO products (img, title, price, weight) values ($1,$2,$3,$4)', [imageName ,product.title ,product.price,product.weigth])
            return createdProduct.rows[0]
        } catch (e) {
            throw new Error(`Product Service Error - ${e}`)
        }
    }

    async update(id: string, product: IProductNoImage, image: UploadedFile) {
        // await productModel.findByIdAndUpdate<IProduct>(
        //     id,
        //     { ...product, image: imageName },
        //     { new: true }
        // )
        try {
            if(!id) {
                throw new Error("нет id"); 
            }
            const imageName = fileService.createdFile(image)
            const updatedProduct = pool.query('I')
            if(!updatedProduct){
                throw new Error('Неправильный id')
            }
            return updatedProduct
        } catch (e) {
            throw new Error(`Product Service Error - ${e}`)
        }
    }

    async delete(id: string) {
        try {
            myError(!id, 'Нет id')
            const deletedProduct = await productModel.findByIdAndDelete<IProduct>(id)
            myError(!deletedProduct, 'Неправильный id')
            return deletedProduct
        } catch (e) {
            throw new Error(`Product Service Error - ${e}`)
        }
    }
}

export default new ProductService()