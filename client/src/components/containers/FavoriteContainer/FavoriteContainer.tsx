import CartItem from '@components/common/Cart/CartItem/CartItem'
import useTypedDispatch from '@hooks/useTypedDispatch'
import useTypedSelector from '@hooks/useTypedSelector'
import { fetchFavorite } from '@redux/slices/favorite/favorite.actions'
import favoriteSelector from '@redux/slices/favorite/favorite.selector'
import { IProduct } from '@redux/slices/product/products.interface'
import React, { FC, useEffect } from 'react'
import styles from './FavoriteContainer.module.scss'
import heartFilled from '@assets/heartFilledHuge.svg'
import ProductItem from '@components/common/ProductItem/ProductItem'

const FavoriteContainer: FC = () => {
    const { favorite } = useTypedSelector(favoriteSelector)
    const dispatch = useTypedDispatch()
    const { loading, error, favourite } = useTypedSelector(favoriteSelector)

    useEffect(() => {
        !favourite?.length && dispatch(fetchFavorite())
    }, [])

    return (
        <div className={styles.Container}>
            <div className={styles.Title}>
                <p>Избранное</p>
                <img src={heartFilled} alt="heart" />
            </div>
            <div className={styles.Favorites}>
                {
                    !!favorite?.length && favorite.map((product: IProduct) => <ProductItem
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        img={product.img}
                        gramms={product.gramms}
                    />)
                }
            </div>
        </div>
    )
}

export default FavoriteContainer
