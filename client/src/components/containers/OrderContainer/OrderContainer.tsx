import OrderMap from '@components/common/Order/OrderMap/OrderMap'
import Input from '@components/UI/Input/Input'
import { FC, useEffect } from 'react'
import styles from './OrderContainer.module.scss'
import add from '@assets/add.svg'
import OrderPaymentCart from '@components/common/Order/OrderPaymentCard/OrderPaymentCard'
import { Link, useNavigate } from 'react-router-dom'
import ButtonPrimary from '@components/UI/Buttons/ButtonPrimary/ButtonPrimary'
import useTypedSelector from '@hooks/useTypedSelector'
import cartSelector from '@redux/slices/cart/cart.selector'
import useTypedDispatch from '@hooks/useTypedDispatch'
import { deleteCartAll, fetchCart } from '@redux/slices/cart/cart.actions'
import { ICartProduct } from '@redux/slices/cart/cart.interface'
import CartItem from '@components/common/Cart/CartItem/CartItem'
import { Field, Formik } from 'formik'
import * as yup from 'yup'
import MaskedInput from 'react-text-mask'
import { userUpdate } from '@redux/slices/auth/auth.actions'
import { createOrder } from '@redux/slices/order/order.actions'

const OrderContainer: FC = () => {
    const dispatch = useTypedDispatch()
    const { cart, totalPrice } = useTypedSelector(cartSelector)
    const navigate = useNavigate()
    useEffect(() => {
        !cart?.length && dispatch(fetchCart())
    }, [totalPrice])

    const OrderHandler = (adress:string, phone:string) => {
        dispatch(deleteCartAll())
        dispatch(userUpdate({ adress, phone} ))
        dispatch(createOrder())
        navigate('/order_passed')
    }
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
        adress: yup.string().required('Это поле обязательно').min(4, 'Ведите корректный адресс')
    })

    return (
        <Formik
            initialValues={{
                phone: '',
                adress: ''
            }}
            validateOnBlur
            onSubmit={(values) => OrderHandler(values.adress, values.phone)}
            validationSchema={validationSchema}
        >
            {({
                values, errors, touched, handleChange, handleBlur, handleSubmit
            }) => (
                <div className={styles.Container}>
                    <div className={styles.PaymentBlock}>
                        <h3 className={styles.Title}>оплата</h3>
                        <div className={styles.Adress}>
                            <h4>Адрес</h4>
                            {touched.adress && errors.adress && <p className={styles.Error}>{errors.adress}</p>}
                            <Input   
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.adress}
                                name="adress"
                                type="text"
                                className={touched.adress && errors.adress && styles.ErrorValid}
                                placeholder="Начните вводить..." />
                            <OrderMap />
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
                                <div className={styles.AddPayment}>
                                    <img src={add} alt="add" />
                                    добавить новую карту
                                </div>
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
                            {
                                !!cart?.length && cart.map((product: ICartProduct) => <CartItem
                                    id={product.id}
                                    key={product.title}
                                    title={product.title}
                                    gramms={product.gramms}
                                    price={product.price}
                                    img={product.img}
                                    counter={product.counter}
                                />)
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
                                    {totalPrice > 5000 ? totalPrice : totalPrice + 500}
                                    {' '}
                                    ₽
                                </h3>
                            </div>
                        </div>
                        <div className={styles.OrderBtn}>
                            <ButtonPrimary type="submit" onClick={() => handleSubmit()} extraType="RoundedReversed">подтвердить оформление</ButtonPrimary>
                        </div>
                    </div>
                </div>)}

        </Formik>
    )
}

export default OrderContainer
