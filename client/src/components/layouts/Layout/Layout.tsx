import { FC, useState } from 'react'
import styles from './Layout.module.scss'
import logo from '@assets/logo.svg'
import cart from '@assets/shopping-cart.svg'
import heart from '@assets/heart.svg'
import user from '@assets/user.svg'
import { LayoutProps } from './Layout.interface'
import { Link } from 'react-router-dom'
import CartModal from '@components/common/Cart/CartModal/CartModal'
import telegram from '@assets/telegram.svg'
import whatsapp from '@assets/whatsapp.svg'
import useTypedSelector from '@hooks/useTypedSelector'
import authSelector from '@redux/slices/auth/auth.selector'
import { Link as AnimatedLink, animateScroll as scroll } from 'react-scroll'
import Header from './Header/Header'

const Layout: FC<LayoutProps> = ({ children }) => {
    const { isAuth } = useTypedSelector(authSelector)

    return (
        <>
            <Header />

            <div className={styles.Container}>
                {children}
            </div>

            <div className={styles.Footer}>
                <div className={styles.Contacts}>
                    <div className={styles.ContactsTitle}>Контакты</div>
                    <div className={styles.FooterLinks}>
                        <a href="tel:+7777777777">+7-999-999-99-99</a>
                        <a href="mailto:mail@yandex.ru">mail@yandex.ru</a>
                    </div>
                    <div className={styles.FooterIcons}>
                        <a href="tg">
                            <img src={telegram} alt="telegram" />
                        </a>
                        <a href="whts">
                            <img src={whatsapp} alt="whatsapp" />
                        </a>
                    </div>

                </div>
                <Link to="/" className={styles.Logo}>
                    <img src={logo} alt="logo" />
                </Link>
                <div className={styles.FooterNav}>
                    <Link to="/" className={styles.FooterNavItem}>
                        главная
                    </Link>
                    {isAuth ? <> </> :
                        <>
                            {' '}
                            <Link to="/registration" className={styles.FooterNavItem}>
                                регистрация
                            </Link>
                            <Link to="/login" className={styles.FooterNavItem}>
                                вход
                            </Link>
                        </>}

                    <Link to="/favorite" className={styles.FooterNavItem}>
                        Избранное
                    </Link>
                </div>

            </div>
        </>
    )
}

export default Layout
