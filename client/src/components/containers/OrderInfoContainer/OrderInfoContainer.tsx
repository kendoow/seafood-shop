import { FC, useEffect } from 'react'
import useTypedDispatch from '@hooks/useTypedDispatch'
import useTypedSelector from '@hooks/useTypedSelector'
import { fetchOneOrder } from '@redux/slices/order/order.actions'
import orderSelector from '@redux/slices/order/order.selector'

import styles from './OrderInfoContainer.module.scss'
import authSelector from '@redux/slices/auth/auth.selector'
import { ICartProduct } from '@redux/slices/cart/cart.interface'
import EmptySpace from '@components/common/EmptySpace/EmptySpace'

import boxIcon from '@assets/boxIcon.png'
import OrderItem from '@components/common/Order/OrderItem/OrderItem'

const OrderInfoContainer: FC = () => {
    const dispatch = useTypedDispatch()

    const { order } = useTypedSelector(orderSelector)
    const { user } = useTypedSelector(authSelector)
    useEffect(() => {
        dispatch(fetchOneOrder())
    }, [])

    return (
        <div className={styles.Container}>
            <div className={styles.Text}>
                <div className={styles.InfoBlock}>
                    <h4 className={styles.OrderId}>
                        Заказ №
                        {order.id}
                    </h4>
                    <div className={styles.OrderBlock}>
                        <h6 className={styles.OrderTitle}>Дата оформления</h6>
                        <h5 className={styles.OrderInfo}>{order.date ? order.date : 'Оформите первый заказ!'}</h5>
                    </div>
                    <div className={styles.OrderBlock}>
                        <h6 className={styles.OrderTitle}>Адрес доставки</h6>
                        <h5 className={styles.OrderInfo}>{user.address}</h5>
                    </div>
                    <div className={styles.OrderBlock}>
                        <h6 className={styles.OrderTitle}>Получатель</h6>
                        <h5 className={styles.OrderInfo}>{user.name}</h5>
                    </div>
                    <div className={styles.OrderBlock}>
                        <h6 className={styles.OrderTitle}>Дата доставки</h6>
                        <h5 className={styles.OrderInfo}>{order.delivery_date ? order.delivery_date : 'Оформите первый заказ!'}</h5>
                    </div>
                </div>
            </div>

            <div className={styles.OrderItems}>
                <h4 className={styles.OrderItemsTitle}>Ваш заказ</h4>
                <div className={styles.OrderItemsContainer}>
                    {
                        order.products?.length ?
                            order.products.map((product: ICartProduct) => <OrderItem
                                id={product.id}
                                key={product.title}
                                title={product.title}
                                gramms={product.gramms}
                                price={product.price}
                                img={product.img}
                                counter={product.counter}
                            />) : <EmptySpace title="Тут пока что пусто..." img={boxIcon} btnText="в магазин!" />
                    }
                </div>
                <div className={styles.OrderPrices}>
                    <div className={styles.OrderPriceItem}>
                        <h4>Сумма заказа:</h4>
                        <h3>
                            {order.totalPrice ?
                                order.totalPrice && order.totalPrice > 5000 ? `${order.totalPrice} ₽ `
                                    : `${order.totalPrice - 500} ₽ `
                                : 'Тут пока что пусто'}
                        </h3>
                    </div>
                    <div className={styles.OrderPriceItem}>
                        <h4>Доставка:</h4>
                        <h3>{order.totalPrice > 5000 ? 'Бесплатно' : '500 ₽'}</h3>
                    </div>
                    <div className={styles.TotalPrice}>
                        <h4>Итого:</h4>
                        <h3>
                            {order.totalPrice ? `${order.totalPrice} ₽ ` : 'Тут пока что пусто'}
                        </h3>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OrderInfoContainer
