import { FC } from 'react'
import styles from './AddButton.module.scss'
import { AddButtonProps } from './AddButton.types'
import cn from 'classnames'

const AddButton: FC<AddButtonProps> = ({
    children, disabled, className, ...props
}) => {
    return (
        <div className={cn(className, styles.Container)}>

            <div className={styles.MinusContainer}>
                <button {...props} disabled={disabled} className={styles.Minus}>—</button>
            </div>
            <div className={styles.Amount}>{children}</div>

            <div className={styles.PlusContainer}>
                <button {...props} disabled={disabled} className={styles.Plus}>+</button>
            </div>
        </div>
    )
}

export default AddButton
