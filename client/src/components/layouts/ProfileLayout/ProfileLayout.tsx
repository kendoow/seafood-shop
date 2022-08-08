import ButtonPrimary from '@components/UI/Buttons/ButtonPrimary/ButtonPrimary'
import useTypedDispatch from '@hooks/useTypedDispatch'
import useTypedSelector from '@hooks/useTypedSelector'
import { authLogout } from '@redux/slices/auth/auth.actions'
import authSelector from '@redux/slices/auth/auth.selector'
import { FC } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './ProfileLayout.module.scss'
import { ProfileLayoutProps } from './ProfileLayout.types'

const ProfileLayout: FC<ProfileLayoutProps> = ({ children }) => {
    const dispatch = useTypedDispatch()
    const { isAuth } = useTypedSelector(authSelector)
    const LogoutHandler = () => {
        dispatch(authLogout())
    }
    console.log(isAuth)
    return (
        <div className={styles.Container}>
            <div className={styles.Navigation}>
                <NavLink to="/profile" className={(navData) => (navData.isActive ? styles.Active : styles.NavItem)}>
                    Личный кабинет
                </NavLink>
                <NavLink to="/profile" className={(navData) => (navData.isActive ? styles.Active : styles.NavItem)}>
                    избранное
                </NavLink>
                <NavLink to="/profile" className={(navData) => (navData.isActive ? styles.Active : styles.NavItem)}>
                    доставка
                </NavLink>

                {isAuth ?

                    <ButtonPrimary onClick={LogoutHandler} className={styles.Btn} type="Secondary">Выйти</ButtonPrimary>
                    : <Link className={styles.BtnLight} to="/login">Войти</Link>}

            </div>
            <div className={styles.Content}>
                {children}
            </div>
        </div>
    )
}

export default ProfileLayout
