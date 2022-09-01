import CartItem from '@components/common/Cart/CartItem/CartItem'
import useTypedDispatch from '@hooks/useTypedDispatch'
import useTypedSelector from '@hooks/useTypedSelector'
import { fetchFavorite } from '@redux/slices/favorite/favorite.actions'
import favoriteSelector from '@redux/slices/favorite/favorite.selector'
import { IProduct } from '@redux/slices/product/products.interface'
import React, { FC, useEffect } from 'react'
import styles from './FavoriteContainer.module.scss'
import heartFilled from '@assets/favoriteBig.png'
import ProductItem from '@components/common/ProductItem/ProductItem'
import EmptySpace from '@components/common/EmptySpace/EmptySpace'
import authSelector from '@redux/slices/auth/auth.selector'

const FavoriteContainer: FC = () => {
    const { favorite } = useTypedSelector(favoriteSelector)
    const dispatch = useTypedDispatch()
    const { isAuth } = useTypedSelector(authSelector)

    useEffect(() => {
        !favorite?.length && dispatch(fetchFavorite())
    }, [])

    return (
        <div className={styles.Container}>
            <div className={styles.Title}>
                <p>Избранное</p>

            </div>

            {favorite.length ?
                <div className={styles.Favorites}>
                    {favorite.map((product: IProduct) => <ProductItem
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        img={product.img}
                        gramms={product.gramms}

                    />)}
                </div> : <EmptySpace img={heartFilled} title={isAuth ? 'Здесь ничего нет...' : 'Войдите в аккаунт чтобы добавить в избранное'} btnText="Войти" />}

        </div>
    )
}

export default FavoriteContainer
