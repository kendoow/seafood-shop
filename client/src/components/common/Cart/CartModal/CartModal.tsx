import ButtonPrimary from '@components/UI/Buttons/ButtonPrimary/ButtonPrimary'
import { FC, useEffect } from 'react'
import CartItem from '../CartItem/CartItem'
import styles from './CartModal.module.scss'
import { CartModalProps } from './CartModal.types'

const CartModal: FC<CartModalProps> = ({ active, setActive }) => {
    useEffect(() => {
        document.body.style.overflow = active ? 'hidden' : 'auto'
    }, [active])

    return (
        <div onClick={() => setActive(false)} className={active ? styles.Active : styles.Container}>
            <div onClick={(e) => e.stopPropagation()} className={styles.Content}>

                <div className={styles.Text}>

                    <div className={styles.Title}>Корзина</div>
                    <div
                        onClick={() => setActive(false)}
                        className={styles.CloseBtn}
                    />

                    <div className={styles.Products}>
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                    </div>
                </div>

                <div className={styles.Btn}>
                    <button className={styles.BtnElement}>В магазин</button>
                </div>
            </div>
        </div>
    )
}

export default CartModal
