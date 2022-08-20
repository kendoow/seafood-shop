import { FC } from 'react'
import styles from './AddButton.module.scss'
import { AddButtonProps } from './AddButton.types'
import cn from 'classnames'
import useTypedDispatch from '@hooks/useTypedDispatch'
import { deleteCartItem, updateCart } from '@redux/slices/cart/cart.actions'

const AddButton: FC<AddButtonProps> = ({
    children, disabled, className, id, counter, ...props
}) => {
    const dispatch = useTypedDispatch()

    const updateHandler = (type: 'plus' | 'minus') => {
        if (type === 'plus') dispatch(updateCart({ productId: id, counter: counter + 1 }))
        else {
            if (counter - 1 === 0) {
                dispatch(deleteCartItem(id))
                return
            }
            dispatch(updateCart({ productId: id, counter: counter - 1 }))
        }
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
