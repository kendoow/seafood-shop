// react/jsx-one-expression-per-line
import EmptySpace from '@components/common/EmptySpace/EmptySpace'
import ButtonPrimary from '@components/UI/Buttons/ButtonPrimary/ButtonPrimary'
import useTypedDispatch from '@hooks/useTypedDispatch'
import useTypedSelector from '@hooks/useTypedSelector'
import { fetchCart } from '@redux/slices/cart/cart.actions'
import { ICartProduct } from '@redux/slices/cart/cart.interface'
import cartSelector from '@redux/slices/cart/cart.selector'
import { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import styles from './CartModal.module.scss'
import { CartModalProps } from './CartModal.interface'
import boxIcon from '@assets/boxIcon.png'

const CartModal: FC<CartModalProps> = ({ active, setActive }) => {
    const dispatch = useTypedDispatch()
    const { cart, totalPrice } = useTypedSelector(cartSelector)

    useEffect(() => {
        document.body.style.overflow = active ? 'hidden' : 'auto'
    }, [active])

    useEffect(() => {
        !cart?.length && dispatch(fetchCart())
    }, [totalPrice])

    return (
        <div onClick={() => setActive(false)} className={active ? styles.Active : styles.Container}>
            <div onClick={(e) => e.stopPropagation()} className={active ? styles.Content : styles.Empty}>

                <div className={styles.Text}>

                    <div className={styles.Title}>Корзина</div>
                    <div
                        onClick={() => setActive(false)}
                        className={styles.CloseBtn}
                    />

                    <div className={styles.Products}>
                        {
                            !!cart?.length && cart.map((product: ICartProduct) => <CartItem
                                id={product.id}
                                key={product.title}
                                title={product.title}
                                gramms={product.gramms}
                                price={product.price}
                                img={product.img}
                                counter={product.counter}
                            />)
                        }
                    </div>
                </div>
                {!cart.length && <EmptySpace
                    isVisible={false}
                    title="Добавьте сюда что
                            нибудь..."
                    img={boxIcon}
                />}
                <div className={styles.Btn}>
                    {
                        totalPrice === 0 ?
                            <button onClick={() => setActive(false)} className={styles.BtnElement}>В магазин!</button>
                            :
                            <div className={styles.BtnWrapper}>
                                <div className={styles.TotalPrice}>
                                    <div>Итого:</div>
                                    <div>
                                        {totalPrice}
                                        {' '}
                                        ₽
                                    </div>
                                </div>
                                <Link className={styles.BtnOrder} to="/order">
                                    <ButtonPrimary onClick={() => setActive(false)} className={styles.BtnRounded} extraType="Rounded">оформить заказ</ButtonPrimary>
                                </Link>
                            </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default CartModal
