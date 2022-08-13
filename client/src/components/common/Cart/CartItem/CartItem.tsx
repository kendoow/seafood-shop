import { FC, useEffect, useState } from 'react'
import styles from './CartItem.module.scss'
import heart from '@assets/heartDark.svg'
import ButtonPrimary from '@components/UI/Buttons/ButtonPrimary/ButtonPrimary'
import AddButton from '@components/UI/Buttons/AddButton/AddButton'
import { IProduct } from '@redux/slices/product/products.interface'
import imageLoad from '@utils/imageLoad'
import cartSelector from '@redux/slices/cart/cart.selector'
import useTypedSelector from '@hooks/useTypedSelector'
import useTypedDispatch from '@hooks/useTypedDispatch'
import { createCart, deleteCart } from '@redux/slices/cart/cart.actions'
import favoriteSelector from '@redux/slices/favorite/favorite.selector'
import heartFilled from '@assets/heartFilled.svg'
import { createFavorite, deleteFavorite } from '@redux/slices/favorite/favorite.actions'

const CartItem: FC<IProduct> = ({
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
        if (cart.find((value:IProduct) => value.id === id)) {
            setActiveCart(true)
        } else {
            setActiveCart(false)
        }
    }, [cart])

    const cartHandler = () => {
        setActiveCart(!activeCart)
        activeCart ? dispatch(deleteCart(id)) : dispatch(createCart(id))
    }

    const favouriteHandler = () => {
        setActiveFavorite(!activeFavorite)
        activeFavorite
            ? dispatch(deleteFavorite(id))
            : dispatch(createFavorite(id))
    }
    
    return (
        <div className={styles.Container}>
            <div className={styles.Image}>
                <img width={200} height={200} src={imageLoad(img)} alt="item" />
            </div>
            <div className={styles.Text}>
                <div className={styles.Main}>
                    <div className={styles.MainText}>
                        <p className={styles.Name}>{title}</p>
                        <p className={styles.Weight}>{gramms}</p>
                    </div>
                    <button onClick={favouriteHandler}>
                    <img width={30} height={30} src={activeFavorite ? heartFilled : heart} alt="heart" />
                    </button>
                </div>
                <div className={styles.Price}>
                    {price}
                </div>
                <div className={styles.Btns}>
                    <ButtonPrimary onClick={cartHandler} extraType="PrimaryMin">Удалить</ButtonPrimary>
                    <AddButton>1</AddButton>
                </div>

            </div>
        </div>
    )
}

export default CartItem
