// react/jsx-one-expression-per-line
import useTypedSelector from '@hooks/useTypedSelector'
import { authLogout } from '@redux/slices/auth/auth.actions'
import authSelector from '@redux/slices/auth/auth.selector'
import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { BurgerMenuProps } from './BurgerMenu.interface'

import styles from './BurgerMenu.module.scss'

const BurgerMenu: FC<BurgerMenuProps> = ({ active, setActive }) => {
    const dispatch = useDispatch()

    const { isAuth } = useTypedSelector(authSelector)
    const navigate = useNavigate()
    useEffect(() => {
        document.body.style.overflow = active ? 'hidden' : 'auto'
    }, [active])

    const navigateHandler = () => {
        navigate('/')
        setActive(false)
    }

    return (
        <div className={active ? styles.Active : styles.Container}>
            <div className={active ? styles.Content : styles.Empty}>

                <div className={styles.Text}>

                    <div
                        onClick={() => setActive(false)}
                        className={styles.CloseBtn}
                    />

                    <a
                        onClick={() => navigateHandler()}
                        href="#delivery"
                        className={styles.BurgerItem}
                    >
                        Доставка

                    </a>

                    <a
                        onClick={() => navigateHandler()}
                        href="#products"
                        className={styles.BurgerItem}
                    >
                        Продукция
                    </a>
                    <Link className={styles.BurgerItem} to="/favorite">избранное</Link>

                    <a
                        onClick={() => navigateHandler()}
                        className={styles.BurgerItem}
                        href="#comments"
                    >
                        Отзывы

                    </a>
                    <Link className={styles.BurgerItem} to="/orderinfo">ваши заказы</Link>
                </div>
                {
                    isAuth ? <button className={styles.BurgerItem} onClick={() => dispatch(authLogout())}>Выйти</button> : <Link className={styles.BurgerItem} to="/login">Войти</Link>
                }
            </div>
        </div>
    )
}

export default BurgerMenu
