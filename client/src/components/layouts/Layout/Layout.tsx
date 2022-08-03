import { FC, useState } from 'react'
import styles from './Layout.module.scss'
import logo from '@assets/logo.svg'
import cart from '@assets/shopping-cart.svg'
import heart from '@assets/heart.svg'
import user from '@assets/user.svg'
import { LayoutProps } from './Layout.types'
import { Link } from 'react-router-dom'
import CartModal from '@components/common/Cart/CartModal/CartModal'

const Layout: FC<LayoutProps> = ({ children }) => {
    const [activeModal, setActiveModal] = useState<boolean>(false)

    const menuHandler = () => {
        setActiveModal(true)
    }

    return (
        <>
            <div className={styles.Header}>
                <Link to="/" className={styles.Logo}>
                    <img src={logo} alt="logo" />
                </Link>
                <div className={styles.Nav}>
                    <div className={styles.NavItems}>
                        <div className={styles.NavItem}>
                            Продукция
                        </div>
                        <div className={styles.NavItem}>
                            Доставка
                        </div>
                    </div>
                    <CartModal active={activeModal} setActive={setActiveModal} />
                    <div className={styles.Icons}>

                        <img onClick={menuHandler} src={cart} alt="cart" />

                        <img src={heart} alt="heart" />
                        <Link to="/login" className={styles.Btn}>войти</Link>
                        {/* <img src={user} alt="user" /> */}
                    </div>
                </div>
            </div>
            <div className={styles.Container}>
                {children}
            </div>
            <div className={styles.Footer}>
                1
            </div>
        </>
    )
}

export default Layout
