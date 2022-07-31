import { FC } from 'react'
import styles from './FormLayout.module.scss'
import { FormLayoutProps } from './FormLayout.types'

const FormLayout: FC<FormLayoutProps> = ({ children }) => {
    return (
        <div className={styles.Container}>
            {children}
        </div>
    )
}

export default FormLayout
