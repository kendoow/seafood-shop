import { FC, useState } from 'react'
import styles from './AddButton.module.scss'
import { AddButtonProps } from './AddButton.types'
import cn from 'classnames'
import useTypedDispatch from '@hooks/useTypedDispatch'
import { updateCart } from '@redux/slices/cart/cart.actions'

const AddButton: FC<AddButtonProps> = ({
    children, disabled, className, id, initialCounter, ...props
}) => {
    const dispatch = useTypedDispatch()
    const [counter, setCounter] = useState<number>(initialCounter)

    const updateHandler = (type: 'plus' | 'minus') => {
        if (type === 'plus') setCounter(counter + 1)
        else setCounter(counter - 1)
        dispatch(updateCart({ productId: id, counter }))
    }

    return (
        <div className={cn(className, styles.Container)}>

            <div className={styles.MinusContainer}>
                <button onClick={() => updateHandler('minus')} {...props} disabled={disabled} className={styles.Minus}>—</button>
            </div>
            <div className={styles.Amount}>{children}</div>

            <div className={styles.PlusContainer}>
                <button onClick={() => updateHandler('plus')} {...props} disabled={disabled} className={styles.Plus}>+</button>
            </div>
        </div>
    )
}

export default AddButton
