import favoriteService from '@services/favorite.service'
import { Request, Response } from 'express'


class FavoriteController {
    async get(req: Request, res: Response) {
        try {
            const { refreshToken } = req.cookies
            const FavoriteOwner = await favoriteService.getAll(refreshToken as string)
            res.json(FavoriteOwner)
        } catch (e) {
            res.status(402).json({ message: `FavoriteController Error - ${e}` })
        }
    }

    async create(req: Request, res: Response) {
        try {
            const { refreshToken } = req.cookies
            const FavoriteOwner = await favoriteService.create(refreshToken as string)
            res.json(FavoriteOwner)
        } catch (e) {
            res.status(402).json({ message: `FavoriteController Error - ${e}` })
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { refreshToken } = req.cookies
            const updatedFavoriteOwnerWProducts = await favoriteService.update(refreshToken as string, req.body)
            res.json(updatedFavoriteOwnerWProducts)
        } catch (e) {
            res.status(402).json({ message: `FavoriteController Error - ${e}` })
        }
    }
}

export default new FavoriteController()