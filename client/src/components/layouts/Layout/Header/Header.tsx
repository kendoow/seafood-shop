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

const Header: FC = () => {
    const [activeModal, setActiveModal] = useState<boolean>(false)

    const { isAuth } = useTypedSelector(authSelector)
    const menuHandler = () => {
        setActiveModal(true)
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
                        offset={-150}
                        duration={500}
                        className={styles.NavItem}
                    >
                        Продукция
                    </AnimatedLink>

                    <AnimatedLink
                        to="delivery"
                        smooth
                        offset={0}
                        duration={500}
                        className={styles.NavItem}
                    >
                        Доставка

                    </AnimatedLink>

                </div>
                <CartModal active={activeModal} setActive={setActiveModal} />
                <div className={styles.Icons}>
                    <div className={styles.IconItem} onClick={menuHandler}>
                        <img src={cart} alt="cart" />
                    </div>
                    <Link className={styles.IconItem} to="/favorite">
                        <img src={heart} alt="heart" />
                    </Link>
                    {
                        isAuth ? <Link className={styles.IconItem} to="/order"><img src={user} alt="user" /></Link> : <Link to="/login" className={styles.Btn}>войти</Link>
                    }

                </div>
            </div>
        </div>
    )
}

export default Header
