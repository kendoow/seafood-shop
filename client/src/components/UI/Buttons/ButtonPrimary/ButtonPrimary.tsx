import { FC } from 'react'
import styles from './ButtonPrimary.module.scss'
import { ButtonPrimaryProps } from './ButtonPrimary.types'
import cn from 'classnames'

const ButtonPrimary: FC<ButtonPrimaryProps> = ({
    children, className, disabled, extraType = 'Primary', type, ...props
}) => {
    return (
        <button
            {...props}
            disabled={disabled}
            type={type}
            className={cn(className, styles.Btn, {
                [styles.Primary]: extraType === 'Primary',
                [styles.PrimaryMin]: extraType === 'PrimaryMin',
                [styles.Secondary]: extraType === 'Secondary',
                [styles.SecondaryArrowed]: extraType === 'SecondaryArrowed',
                [styles.SecondaryReversed]: extraType === 'SecondaryReversed',
                [styles.Rounded]: extraType === 'Rounded'
            })}
        >
            {children}
        </button>
    )
}

export default ButtonPrimary
