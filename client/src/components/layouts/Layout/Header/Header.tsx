import { FC, useState } from 'react'
import CartModal from '@components/common/Cart/CartModal/CartModal'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Header.module.scss'
import logo from '@assets/logo.svg'
import cart from '@assets/shopping-cart.svg'
import heart from '@assets/heart.svg'
import user from '@assets/user.svg'
import useTypedSelector from '@hooks/useTypedSelector'
import authSelector from '@redux/slices/auth/auth.selector'
import BurgerMenu from '@components/UI/BurgerMenu/BurgerMenu'
import DropDownList from '@components/UI/DropDownList/DropDownList'

const Header: FC = () => {
    const [activeModal, setActiveModal] = useState<boolean>(false)
    const [activeBurger, setActiveBurger] = useState<boolean>(false)
    const [activeDropList, setActiveDropList] = useState<boolean>(false)
    const navigate = useNavigate()

    const { isAuth } = useTypedSelector(authSelector)
    const menuHandler = () => {
        setActiveModal(true)
    }

    const burgerHandler = () => {
        setActiveBurger(true)
    }

    const dropDownHandler = () => {
        setActiveDropList(true)
    }

    const navigateHandler = () => {
        navigate('/')
    }

    return (
        <div className={styles.Header}>
            <Link to="/" className={styles.Logo}>
                <img src={logo} alt="logo" />
            </Link>
            <div className={styles.Nav}>
                <div className={styles.NavItems}>
                    <a
                        onClick={() => navigateHandler()}
                        className={styles.NavItem}
                        href="#products"
                    >
                        Продукция
                    </a>

                    <a
                        onClick={() => navigateHandler()}
                        className={styles.NavItem}
                        href="#delivery"
                    >
                        Доставка

                    </a>

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
                        isAuth ? <>
                            <DropDownList active={activeDropList} setActive={setActiveDropList} />
                            <button onClick={dropDownHandler} className={styles.UserIcon}>
                                <img src={user} alt="user" />
                            </button>
                        </> :
                            <Link to="/login" className={styles.UserIcon}>
                                войти
                            </Link>
                    }

                </div>
            </div>
        </div>
    )
}

export default Header
