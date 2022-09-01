import { FC } from 'react'
import styles from './Layout.module.scss'
import logo from '@assets/logo.svg'
import { LayoutProps } from './Layout.interface'
import { Link } from 'react-router-dom'
import telegram from '@assets/telegram.svg'
import whatsapp from '@assets/whatsapp.svg'
import useTypedSelector from '@hooks/useTypedSelector'
import authSelector from '@redux/slices/auth/auth.selector'
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
                        <a href="tel:+79175880004" rel="noreferrer">+7-917-588-00-04</a>
                        <a href="mailto:ikuroorders@mail.ru" rel="noreferrer">ikuroorders@mail.ru</a>
                    </div>
                    <div className={styles.FooterIcons}>
                        <a target="_blank" href="https://t.me/Ikuro1" rel="noreferrer">
                            <img src={telegram} alt="telegram" />
                        </a>
                        <a target="_blank" href="whts">
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
