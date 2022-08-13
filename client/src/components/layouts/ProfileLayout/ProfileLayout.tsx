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

    return (
        <div className={styles.Container}>
            <div className={styles.Navigation}>
                <div className={styles.NavItems}>
                    <div className={styles.NavItemContainer}>
                        <NavLink to="/profile" className={(navData) => (navData.isActive ? styles.Active : styles.NavItem)}>
                            Личный кабинет
                        </NavLink>
                    </div>
                    <div className={styles.NavItemContainer}>
                        <NavLink to="/favorite" className={(navData) => (navData.isActive ? styles.Active : styles.NavItem)}>
                            избранное
                        </NavLink>
                    </div>
                    {isAuth ?

                        <ButtonPrimary onClick={LogoutHandler} className={styles.Btn} extraType="Secondary">Выйти</ButtonPrimary>
                        : <Link className={styles.BtnLight} to="/login">Войти</Link>}

                </div>
            </div>
            <div className={styles.Content}>

                <Link to="/" className={styles.CloseBtn} />
                {children}
            </div>
        </div>
    )
}

export default ProfileLayout
