import useOnClickOutside from '@hooks/useOutSideClick'
import useTypedDispatch from '@hooks/useTypedDispatch'
import { authLogout } from '@redux/slices/auth/auth.actions'
import { FC, useRef } from 'react'
import { Link } from 'react-router-dom'
import { DropDownProps } from './DropDownList.interface'
import styles from './DropDownList.module.scss'

const DropDownList: FC<DropDownProps> = ({ active, setActive }) => {
    const dispatch = useTypedDispatch()
    const ref = useRef()

    useOnClickOutside(ref, () => setActive(false))
    return (
        <div ref={ref} className={active ? styles.Container : styles.None}>
            <Link className={styles.Item} to="/order">оплата</Link>
            <Link className={styles.Item} to="/orderinfo">заказы</Link>
            <button onClick={() => dispatch(authLogout())} className={styles.Item}>выйти</button>
        </div>
    )
}

export default DropDownList
