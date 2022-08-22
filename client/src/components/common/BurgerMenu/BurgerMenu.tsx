// react/jsx-one-expression-per-line
import useTypedSelector from '@hooks/useTypedSelector'
import { authLogout } from '@redux/slices/auth/auth.actions'
import authSelector from '@redux/slices/auth/auth.selector'
import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { Link as AnimatedLink, animateScroll as scroll } from 'react-scroll'

import { BurgerMenuProps } from './BurgerMenu.interface'

import styles from './BurgerMenu.module.scss'

const BurgerMenu: FC<BurgerMenuProps> = ({ active, setActive }) => {
    const dispatch = useDispatch()

    const { isAuth } = useTypedSelector(authSelector)

    useEffect(() => {
        document.body.style.overflow = active ? 'hidden' : 'auto'
    }, [active])

    return (
        <div className={active ? styles.Active : styles.Container}>
            <div className={active ? styles.Content : styles.Empty}>

                <div className={styles.Text}>

                    <div
                        onClick={() => setActive(false)}
                        className={styles.CloseBtn}
                    />


                    <AnimatedLink
                        onClick={() => setActive(false)}
                        to="delivery"
                        smooth
                        offset={-90}
                        duration={500}
                        className={styles.BurgerItem}
                    >
                        Доставка

                    </AnimatedLink>

                    <AnimatedLink
                        to="products"
                        smooth
                        offset={-200}
                        duration={500}
                        className={styles.BurgerItem}
                    >
                        Продукция
                    </AnimatedLink>
                    <Link className={styles.BurgerItem} to="/favorite">избранное</Link>

                    <AnimatedLink
                        onClick={() => setActive(false)}
                        to="comments"
                        smooth
                        offset={-90}
                        duration={500}
                        className={styles.BurgerItem}
                    >
                        Отзывы

                    </AnimatedLink>
                </div>
                {
                    isAuth ? <button className={styles.BurgerItem} onClick={() => dispatch(authLogout())}>Выйти</button> : <Link className={styles.BurgerItem} to="/login">Войти</Link>
                }
            </div>
        </div>
    )
}

export default BurgerMenu
