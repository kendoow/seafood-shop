import ButtonPrimary from '@components/UI/Buttons/ButtonPrimary/ButtonPrimary'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ResetPassed.module.scss'

const ResetPassed = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.Text}>
                <h4>Проверьте свою почту. </h4>
                <h4>Туда пришла ссылка для восстановления пароля!</h4>
            </div>
            <ButtonPrimary extraType="Secondary" className={styles.Exit}>
                <Link className={styles.Link} to="/">
                    на главную
                </Link>

            </ButtonPrimary>
        </div>
    )
}

export default ResetPassed
