import { FC } from 'react'
import { OrderPaymentCardProps } from './OrderPaymentCard.interface'
import styles from './OrderPaymentCard.module.scss'

const OrderPaymentCart: FC<OrderPaymentCardProps> = ({ title, description }) => {
    return (
        <div className={styles.PaymentCard}>
            <div className={styles.Type}>
                <div className={styles.Circle}>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="4" cy="4" r="4" fill="black" />
                    </svg>
                </div>
                <h4>{title}</h4>
            </div>
            <div className={styles.Description}>{description}</div>
        </div>
    )
}

export default OrderPaymentCart
