import { FC, useEffect, useState } from 'react'

import useTypedDispatch from '@hooks/useTypedDispatch'
import useTypedSelector from '@hooks/useTypedSelector'

import favoriteSelector from '@redux/slices/favorite/favorite.selector'
import { createCart, deleteCartItem } from '@redux/slices/cart/cart.actions'
import { IProduct } from '@redux/slices/product/products.interface'
import cartSelector from '@redux/slices/cart/cart.selector'
import { deleteFavorite, createFavorite } from '@redux/slices/favorite/favorite.actions'

import ButtonPrimary from '@components/UI/Buttons/ButtonPrimary/ButtonPrimary'
import AddButton from '@components/UI/Buttons/AddButton/AddButton'

import imageLoad from '@utils/imageLoad'

import styles from './ProductItem.module.scss'

import heartFilled from '@assets/heartFilled.svg'
import heart from '@assets/heartDark.svg'
import { ICartProduct } from '@redux/slices/cart/cart.interface'
import { IProductItemProps } from './ProductItem.interface'
import authSelector from '@redux/slices/auth/auth.selector'
import CartModal from '../Cart/CartModal/CartModal'

const ProductItem: FC<IProductItemProps> = ({
    img, title, gramms, price, id
}) => {
    const dispatch = useTypedDispatch()
    const { favorite } = useTypedSelector(favoriteSelector)
    const { cart } = useTypedSelector(cartSelector)
    const { isAuth } = useTypedSelector(authSelector)
    const [activeCart, setActiveCart] = useState<boolean>(false)
    const [activeFavorite, setActiveFavorite] = useState<boolean>(false)
    const [activeModal, setActiveModal] = useState<boolean>(false)
    const [counter, setCounter] = useState<number>()

    useEffect(() => {
        const productCartIndex = cart.findIndex((cartItem: ICartProduct) => cartItem.id === id)
        if (productCartIndex >= 0) {
            setCounter(cart[productCartIndex].counter)
        }
    }, [cart])

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
    const activeHandler = () => {
        setActiveModal(true)
    }
    const cartHandler = () => {
        setActiveCart(!activeCart)
        activeCart ? dispatch(deleteCartItem(id)) : dispatch(createCart(id))
    }
    return (
        <>
            <CartModal active={activeModal} setActive={setActiveModal} />
            <div className={styles.Container}>
                <div className={styles.Image}>
                    <img className={styles.MainImage} src={imageLoad(img)} alt="product" />
                    {isAuth ? <button onClick={favouriteHandler}>
                        <img className={styles.Heart} src={activeFavorite ? heartFilled : heart} alt="heart" />
                    </button> : <></>}

                </div>
                <div className={styles.Text}>
                    <div className={styles.Description}>
                        <p className={styles.Name}>
                            {title}
                        </p>
                        <p className={styles.Weight}>
                            {' '}
                            {gramms}
                            {' '}
                            гр
                        </p>
                    </div>
                    <div className={styles.Price}>
                        {price}
                        {' '}
                        ₽
                    </div>

                    {activeCart ?
                        <div className={styles.Btns}>
                            <ButtonPrimary className={styles.DeleteButton} onClick={() => cartHandler()} extraType="SecondaryReversed">Удалить</ButtonPrimary>
                            <AddButton counter={counter} setCounter={setCounter} id={id} initialсounter={counter as number}>{counter}</AddButton>
                        </div>
                        :
                        <ButtonPrimary className={styles.AddButton} onClick={isAuth ? cartHandler : activeHandler} extraType="Primary">в корзину</ButtonPrimary>}
                </div>
            </div>
        </>
    )
}

export default ProductItem
