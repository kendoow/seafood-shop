import { FC } from 'react'
import styles from './OrderPassedContainer.module.scss'
import OrderPassedImage from '@assets/OrderPassed.png'
import { Link } from 'react-router-dom'
import arrow from '@assets/left-arrow.svg'

const OrderPassedContainer: FC = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.Main}>
                <div className={styles.Title}>
                    Благодарим Вас за выбор нашего
                    магазина!
                </div>
                <div className={styles.Description}>
Ваш заказ успешно принят
                    и готовится к отправке
                </div>
                <img className={styles.Img} src={OrderPassedImage} alt="orderpassed" />
            </div>
            <div className={styles.Exit}>
                <img src={arrow} alt="arrow" />
                <Link className={styles.Link} to="/">
                    на главную
                </Link>

            </div>
        </div>
    )
}

export default OrderPassedContainer
