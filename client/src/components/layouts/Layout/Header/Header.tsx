import { FC, useState } from 'react'
import CartModal from '@components/common/Cart/CartModal/CartModal'
import { Link } from 'react-router-dom'
import { Link as AnimatedLink, animateScroll as scroll } from 'react-scroll'
import styles from './Header.module.scss'
import logo from '@assets/logo.svg'
import cart from '@assets/shopping-cart.svg'
import heart from '@assets/heart.svg'
import user from '@assets/user.svg'
import useTypedSelector from '@hooks/useTypedSelector'
import authSelector from '@redux/slices/auth/auth.selector'
import BurgerMenu from '@components/common/BurgerMenu/BurgerMenu'

const Header: FC = () => {
    const [activeModal, setActiveModal] = useState<boolean>(false)
    const [activeBurger, setActiveBurger] = useState<boolean>(false)

    const { isAuth } = useTypedSelector(authSelector)
    const menuHandler = () => {
        setActiveModal(true)
    }

    const burgerHandler = () => {
        setActiveBurger(true)
    }

    return (
        <div className={styles.Header}>
            <Link to="/" className={styles.Logo}>
                <img src={logo} alt="logo" />
            </Link>
            <div className={styles.Nav}>
                <div className={styles.NavItems}>
                    <AnimatedLink
                        to="products"
                        smooth
                        offset={-200}
                        duration={500}
                        className={styles.NavItem}
                    >
                        Продукция
                    </AnimatedLink>

                    <AnimatedLink
                        to="delivery"
                        smooth
                        offset={-90}
                        duration={500}
                        className={styles.NavItem}
                    >
                        Доставка

                    </AnimatedLink>

                </div>
                <BurgerMenu active={activeBurger} setActive={setActiveBurger} />
                <CartModal active={activeModal} setActive={setActiveModal} />
                <div className={styles.Icons}>
                    <button className={styles.IconItem} onClick={menuHandler}>
                        <img src={cart} alt="cart" />
                    </button>
                    <Link className={styles.IconItem} to="/favorite">
                        <img src={heart} alt="heart" />
                    </Link>
                    <button className={styles.BurgerWrapper} onClick={burgerHandler}>
                        <div className={styles.BurgerMenu}>
                            <span />
                        </div>
                    </button>
                    {
                        isAuth ? <Link className={styles.UserIcon} to="/order"><img src={user} alt="user" /></Link> : <Link to="/login" className={styles.UserIcon}>войти</Link>
                    }

                </div>
            </div>
        </div>
    )
}

export default Header
