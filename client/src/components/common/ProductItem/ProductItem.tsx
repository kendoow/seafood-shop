import { FC, useEffect, useState } from 'react'
import styles from './ProductItem.module.scss'

import heart from '@assets/heartDark.svg'
import ButtonPrimary from '@components/UI/Buttons/ButtonPrimary/ButtonPrimary'
import AddButton from '@components/UI/Buttons/AddButton/AddButton'
import { IProduct } from '@redux/slices/product/products.interface'
import imageLoad from '@utils/imageLoad'
import useTypedDispatch from '@hooks/useTypedDispatch'
import useTypedSelector from '@hooks/useTypedSelector'
import favoriteSelector from '@redux/slices/favorite/favorite.selector'
import { deleteFavorite, createFavorite } from '@redux/slices/favorite/favorite.actions'
import heartFilled from '@assets/heartFilled.svg'
import cartSelector from '@redux/slices/cart/cart.selector'
import { createCart, deleteCart } from '@redux/slices/cart/cart.actions'

const ProductItem: FC<IProduct> = ({
    img, title, gramms, price, id
}) => {
    const dispatch = useTypedDispatch()
    const { favorite } = useTypedSelector(favoriteSelector)
    const { cart } = useTypedSelector(cartSelector)
    const [activeCart, setActiveCart] = useState<boolean>(false)
    const [activeFavorite, setActiveFavorite] = useState<boolean>(false)

    useEffect(() => {
        if (favorite.find((value: IProduct) => value.id === id)) {
            setActiveFavorite(true)
        } else {
            setActiveFavorite(false)
        }
    }, [favorite])

    useEffect(() => {
        if (cart.find((value: IProduct) => value.id === id)) {
            setActiveCart(true)
        } else {
            setActiveCart(false)
        }
    }, [cart])

    const favouriteHandler = () => {
        setActiveFavorite(!activeFavorite)
        activeFavorite
            ? dispatch(deleteFavorite(id))
            : dispatch(createFavorite(id))
    }

    const cartHandler = () => {
        setActiveCart(!activeCart)
        activeCart ? dispatch(deleteCart(id)) : dispatch(createCart(id))
    }
    return (
        <div className={styles.Container}>
            <div className={styles.Image}>
                <img className={styles.MainImage} src={imageLoad(img)} alt="product" />
                <button onClick={favouriteHandler}>
                    <img className={styles.Heart} src={activeFavorite ? heartFilled : heart} alt="heart" />
                </button>
            </div>
            <div className={styles.Text}>
                <div className={styles.Description}>
                    <p className={styles.Name}>
                        {title}
                    </p>
                    <p className={styles.Weight}>{gramms}</p>
                </div>
                <div className={styles.Price}>
                    {price}
                </div>
                <div className={styles.Btns}>
                    <ButtonPrimary onClick={cartHandler} extraType="PrimaryMin">{activeCart ? 'Удалить' : 'В корзину'}</ButtonPrimary>
                    <AddButton>1</AddButton>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
