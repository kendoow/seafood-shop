import { FC } from 'react'
import styles from './ButtonPrimary.module.scss'
import { ButtonPrimaryProps } from './ButtonPrimary.types'
import cn from 'classnames'

const ButtonPrimary: FC<ButtonPrimaryProps> = ({
    children, className, disabled, type = 'Primary', ...props
}) => {
    return (
        <button
            {...props}
            disabled={disabled}
            className={cn(className, styles.Btn, {
                [styles.Primary]: type === 'Primary',
                [styles.Secondary]: type === 'Secondary',
            })}
        >
            {children}
        </button>
    )
}

export default ButtonPrimary
