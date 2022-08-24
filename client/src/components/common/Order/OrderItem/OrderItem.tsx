import imageLoad from '@utils/imageLoad'
import { FC } from 'react'
import OrderItemProps from './OrderItem.interface'
import styles from './OrderItem.module.scss'

const OrderItem: FC<OrderItemProps> = ({
    img, title, gramms, price, counter
}) => {
    return (
        <div className={styles.Container}>
            <div className={styles.Img}>
                <img src={imageLoad(img)} alt="productIcon" />
            </div>
            <div className={styles.TextBlock}>
                <div>
                    <h4 className={styles.Title}>{title}</h4>
                    <h5 className={styles.Gramms}>
                        {gramms}
                        {' '}
                        гр
                    </h5>
                </div>
                <div className={styles.PriceContainer}>
                    <h3 className={styles.Price}>
                        {price}
                        ₽
                    </h3>
                    <h4 className={styles.Counter}>
                        {counter}
                        {' '}
                        шт
                        {' '}
                    </h4>
                </div>

            </div>
        </div>
    )
}

export default OrderItem
