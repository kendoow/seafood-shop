import { IProductNoImage } from 'interfaces/product.interface';
import { IProduct } from 'interfaces/product.interface';
import pool from 'index';
import { UploadedFile } from 'express-fileupload'

import fileService from './file.service'


class ProductService {
    async getAll() {
        try {
            const products = await pool.query<IProduct>('SELECT * FROM products')
            return products.rows
        } catch (e) {
            throw new Error(`Products Service Error - ${e}`)
        }
    }

    async getOne(id: string) {
        try {
            if(!id){
                throw new Error("нет id"); 
            }
           
            const product = await pool.query<IProduct>('SELECT * FROM products where id = $1', [id])
            if(!product){
                throw new Error("неправильный id"); 
            }
            return product.rows[0]
        } catch (e) {
            throw new Error(`Products Service Error - ${e}`)
        }
    }

    async create(product: IProductNoImage, image: UploadedFile) {
        try {
            const imageName = fileService.createdFile(image)
            const createdProduct = await pool.query<IProduct>('INSERT INTO products (img, title, price, gramms) values ($1,$2,$3,$4) RETURNING *', [imageName ,product.title ,product.price,product.gramms])
            return createdProduct.rows[0]
        } catch (e) {
            throw new Error(`Products Service Error - ${e}`)
        }
    }

    async update(id: string, product: IProductNoImage, image: UploadedFile) {
        try {
            if(!id) {
                throw new Error("нет id"); 
            }
            const imageName = fileService.createdFile(image)
            const updatedProduct = await pool.query<IProduct>('UPDATE products set img = $1, title = $2, price = $3, gramms = $4 RETURNGING *',[imageName ,product.title ,product.price,product.gramms])
            if(!updatedProduct){
                throw new Error('Неправильный id')
            }
            return updatedProduct.rows[0]
        } catch (e) {
            throw new Error(`Products Service Error - ${e}`)
        }
    }

    async delete(id: string) {
        try {
            if(!id) {
                throw new Error("нет id"); 
            }
            const deletedProduct = await pool.query<IProduct>('DELETE FROM products where id = $1', [id])
            if(!deletedProduct){
                throw new Error('Неправильный id')
            }
            return deletedProduct
        } catch (e) {
            throw new Error(`Products Service Error - ${e}`)
        }
    }
}

export default new ProductService()