import { FC, useEffect } from 'react'
import { Field, Formik } from 'formik'
import * as yup from 'yup'
import MaskedInput from 'react-text-mask'

import OrderMap from '@components/common/Order/OrderMap/OrderMap'
import Input from '@components/UI/Input/Input'

import OrderPaymentCart from '@components/common/Order/OrderPaymentCard/OrderPaymentCard'
import { Link, useNavigate } from 'react-router-dom'
import ButtonPrimary from '@components/UI/Buttons/ButtonPrimary/ButtonPrimary'
import useTypedSelector from '@hooks/useTypedSelector'
import cartSelector from '@redux/slices/cart/cart.selector'
import useTypedDispatch from '@hooks/useTypedDispatch'
import { deleteCartAll, fetchCart } from '@redux/slices/cart/cart.actions'
import { ICartProduct } from '@redux/slices/cart/cart.interface'
import CartItem from '@components/common/Cart/CartItem/CartItem'

import { userUpdate } from '@redux/slices/auth/auth.actions'
import { createOrder } from '@redux/slices/order/order.actions'
import authSelector from '@redux/slices/auth/auth.selector'
import EmptySpace from '@components/common/EmptySpace/EmptySpace'

import boxIcon from '@assets/boxIcon.png'

import styles from './OrderContainer.module.scss'
import Spiner from '@components/UI/Spiner/Spiner'

const phoneNumberMask = [
    [8],
    '(',
    /[1-9]/,
    /\d/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/
]

const validationSchema = yup.object().shape({
    phone: yup.string().required('Это поле обязательно').min(8, 'Номер не валидный'),
    address: yup.string().required('Это поле обязательно').min(4, 'Ведите корректный адресс')
})

const OrderContainer: FC = () => {
    const dispatch = useTypedDispatch()

    const { user } = useTypedSelector(authSelector)

    const { loading, cart, totalPrice } = useTypedSelector(cartSelector)
    const navigate = useNavigate()

    useEffect(() => {
        !cart?.length && dispatch(fetchCart())
    }, [totalPrice])

    const FinalPrice = totalPrice > 5000 ? totalPrice : totalPrice + 500

    const OrderHandler = (address: string, phone: string) => {
        dispatch(userUpdate({ address, phone }))
        dispatch(createOrder(FinalPrice)).unwrap()
            .then(() => {
                dispatch(deleteCartAll())
                navigate('/order_passed')
            })
    }

    return (
        <Formik
            initialValues={{
                phone: '',
                address: ''
            }}
            validateOnBlur
            onSubmit={(values) => OrderHandler(values.address, values.phone)}
            validationSchema={validationSchema}
        >
            {({
                values, errors, touched, handleChange, handleBlur, handleSubmit, setValues
            }) => {
                useEffect(() => {
                    Object.keys(user).length && setValues({ phone: user.phone, address: user.address })
                }, [user])
                return (
                    <div className={styles.Container}>
                        <div className={styles.PaymentBlock}>
                            <h3 className={styles.Title}>оплата</h3>
                            <div className={styles.Address}>
                                <h4>Адрес</h4>
                                {touched.address && errors.address && <p className={styles.Error}>{errors.address}</p>}
                                <Input
                                    minLength={8}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.address}
                                    name="address"
                                    type="text"
                                    className={touched.address && errors.address && styles.ErrorValid}
                                    placeholder="Начните вводить..."
                                />
                                {/* <OrderMap /> */}
                            </div>

                            <div className={styles.Phone}>

                                <h4>Номер телефона</h4>
                                {touched.phone && errors.phone && <p className={styles.Error}>{errors.phone}</p>}
                                <Field
                                    render={({ field }) => (
                                        <MaskedInput
                                            {...field}
                                            name="phone"
                                            mask={phoneNumberMask}
                                            placeholder="Введите номер телефона"
                                            type="phone"
                                            value={values.phone}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={touched.phone && errors.phone ? styles.ErrorValid : styles.Input}
                                        />
                                    )}
                                />
                            </div>
                            <div className={styles.Payment}>
                                <div className={styles.PaymentType}>
                                    <h4>Способ оплаты</h4>
                                </div>
                                <OrderPaymentCart title="Наличные" description="курьеру при получении" />
                            </div>
                        </div>
                        <div className={styles.Order}>
                            <div className={styles.OrderTitle}>
                                <h4>Ваш заказ</h4>
                                <Link className={styles.ChangeOrder} to="/">изменить</Link>
                            </div>
                            <div className={styles.Products}>
                                {loading && <div className={styles.Spiner}><Spiner /></div>}
                                {
                                    totalPrice ?
                                        !!cart?.length && cart.map((product: ICartProduct) => <CartItem
                                            id={product.id}
                                            key={product.id}
                                            title={product.title}
                                            gramms={product.gramms}
                                            price={product.price}
                                            img={product.img}
                                            counter={product.counter}
                                        />) : <EmptySpace title="Сложите в корзину нужные товары" img={boxIcon} btnText="в магазин!" />
                                }
                            </div>
                            <div className={styles.OrderPrices}>
                                <div className={styles.OrderPriceItem}>
                                    <h4>Сумма заказа</h4>
                                    <h3>
                                        {totalPrice}
                                        {' '}
                                        ₽
                                    </h3>
                                </div>
                                <div className={styles.OrderPriceItem}>
                                    <h4>Доставка</h4>
                                    <h3>{totalPrice > 5000 ? 'Бесплатно' : '500 ₽ '}</h3>
                                </div>
                                <div className={styles.TotalPrice}>
                                    <h4>Итого:</h4>
                                    <h3>
                                        {FinalPrice}
                                        {' '}
                                        ₽
                                    </h3>
                                </div>
                            </div>
                            <div className={styles.OrderBtn}>
                                {
                                    cart?.length ?
                                        <ButtonPrimary type="submit" onClick={() => handleSubmit()} extraType="RoundedReversed">подтвердить оформление</ButtonPrimary>

                                        :
                                        <div className={styles.EmptyCart}> Добавьте товары в корзину </div>
                                }

                            </div>
                        </div>
                    </div>)
            }}

        </Formik>
    )
}

export default OrderContainer
