import { Request, Response } from 'express'
import { UploadedFile } from "express-fileupload"
import productsService from "@services/products.service"

class ProductsController{
    async getAll(req: Request, res: Response) {
        try {
            const products = await productsService.getAll()
            res.json(products)
        } catch (e) {
            res.status(400).json({ message: `Products Controller Error - ${e}` })
        }
    }

    async getOne(req: Request, res: Response) {
        try {
            const product = await productsService.getOne(req.body.id)
            res.json(product)
        } catch (e) {
            res.status(400).json({ message: `Products Controller Error - ${e}` })
        }
    }

    async create(req: Request, res: Response) {
       
        try {
            
            const createdProduct = await productsService.create(req.body, req.files?.img as UploadedFile)
            
            res.json(createdProduct)
        } catch (e) {
            res.status(400).json({ message: `Products Controller Error - ${e}` })
        }
    }

    async update(req: Request, res: Response) {
        try {
            const updatedProduct = await productsService.update(req.params.id, req.body, req.files?.image as UploadedFile)
            res.json(updatedProduct)
        } catch (e) {
            res.status(400).json({ message: `Products Controller Error - ${e}` })
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const deletedProduct = await productsService.delete(req.params.id)
            res.json(deletedProduct)
        } catch (e) {
            res.status(400).json({ message: `Products Controller Error - ${e}` })
        }
    }
}

export default new ProductsController()
