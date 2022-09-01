import FormLayout from '@components/layouts/FormLayout/FormLayout'
import ButtonPrimary from '@components/UI/Buttons/ButtonPrimary/ButtonPrimary'
import Input from '@components/UI/Input/Input'
import { authReset } from '@redux/slices/auth/auth.actions'
import { Formik } from 'formik'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import * as yup from 'yup'

import styles from './Reset.module.scss'

const validationSchema = yup.object().shape({
    email: yup.string().email('Введите верный email').required('Это поле обязательно')
})

const Reset: FC = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handlerClick = (email:string) => {
        navigate('/resetpassed')
        dispatch(authReset(email))
    }

    return (

        <FormLayout>
            <div className={styles.Container}>

                <Link className={styles.Exit} to="/" />
                <div className={styles.Title}>
                    Восстановление пароля
                </div>
                <Formik
                    initialValues={{
                        email: '',
                    }}
                    validateOnBlur
                    onSubmit={(values) => handlerClick(values.email)}
                    validationSchema={validationSchema}
                >
                    {({
                        values, errors, touched, handleChange, handleBlur, handleSubmit,
                    }) => (
                        <div className={styles.InputsWrapper}>
                            {touched.email && errors.email && <p className={styles.Error}>{errors.email}</p>}
                            <Input
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                className={touched.email && errors.email && styles.ErrorValid}
                                name="email"
                                placeholder="Почта от вашего аккаунта"
                                type="text"
                            />
                            <div className={styles.BtnContainer}>
                                <ButtonPrimary
                                    type="submit"
                                    onClick={handleSubmit}
                                    className={styles.Btn}
                                >
                                    Восстановить
                                </ButtonPrimary>
                            </div>
                        </div>

                    )}

                </Formik>
            </div>
        </FormLayout>
    )
}

export default Reset
