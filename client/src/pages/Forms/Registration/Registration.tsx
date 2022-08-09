import { FC, useState } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
import styles from './Registration.module.scss'

import { authRegistration } from '@redux/slices/auth/auth.actions'

import useTypedDispatch from '@hooks/useTypedDispatch'

import Input from '@components/UI/Input/Input'
import FormLayout from '@components/layouts/FormLayout/FormLayout'
import ButtonPrimary from '@components/UI/Buttons/ButtonPrimary/ButtonPrimary'

import hidden from '@assets/hidden.svg'
import show from '@assets/show.svg'

const Registration: FC = () => {
    const [hidePassword, setHidePassword] = useState<boolean>(true)
    const [hidePasswordConfirm, setHidePasswordComfirm] = useState<boolean>(true)

    const dispatch = useTypedDispatch()

    const validationSchema = yup.object().shape({
        name: yup.string().typeError('Должно быть строкой').min(3, 'Минимальная длина поля - 3 символа').max(20, 'Максимальная длина поля - 20 символов')
            .required('Это поле обязательно'),
        email: yup.string().email('Введите верный email').required('Это поле обязательно'),
        password: yup.string().typeError('Должно быть строкой').min(5, 'Минимальная длина поля - 5 символов').max(20, 'Максимальная длина поля - 20 символов')
            .required('Это поле обязательно'),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Это поле обязательно')
    })

    return (

        <FormLayout>
            <div className={styles.Container}>
                <Link className={styles.Exit} to="/" />
                <div className={styles.Title}>
                    Регистрация
                </div>
                <div className={styles.Redirect}>
                    <div>
                        Есть аккаут?
                    </div>
                    <Link className={styles.Link} to="/login">
                        Войти
                    </Link>
                </div>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        password: '',
                        confirmPassword: ''
                    }}
                    validateOnBlur
                    onSubmit={(values) => dispatch(authRegistration(values))}
                    validationSchema={validationSchema}
                >
                    {({
                        values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty
                    }) => (
                        <div className={styles.InputsWrapper}>
                            {touched.name && errors.name && <p className={styles.Error}>{errors.name}</p>}
                            <Input
                                className={touched.name && errors.name && styles.ErrorValid}
                                placeholder="Имя"
                                type="text"
                                name="name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.name}
                            />
                            {touched.email && errors.email && <p className={styles.Error}>{errors.email}</p>}
                            <Input
                                className={touched.email && errors.email && styles.ErrorValid}
                                placeholder="Почта"
                                type="email"
                                name="email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                            />
                            {touched.password && errors.password && <p className={styles.Error}>{errors.password}</p>}
                            <div className={styles.PasswordWrapper}>

                                <Input
                                    name="password"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.password}
                                    className={touched.password && errors.password ? styles.ErrorValid : styles.InputPassword}
                                    placeholder="Пароль"
                                    type={hidePassword ? 'password' : 'text'}
                                />
                                <button className={styles.ToggleShow} onClick={() => setHidePassword(!hidePassword)}>
                                    <img
                                        src={hidePassword ? hidden : show}
                                        alt="hidden"
                                    />
                                </button>
                            </div>
                            {touched.confirmPassword && errors.confirmPassword && <p className={styles.Error}>{errors.confirmPassword}</p>}
                            <div className={styles.PasswordWrapper}>

                                <Input
                                    name="confirmPassword"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.confirmPassword}
                                    className={touched.confirmPassword && errors.confirmPassword ? styles.ErrorValid : styles.InputPassword}
                                    placeholder="Повторите пароль"
                                    type={hidePasswordConfirm ? 'password' : 'text'}
                                />

                                <button className={styles.ToggleShow} onClick={() => setHidePasswordComfirm(!hidePasswordConfirm)}>
                                    <img
                                        src={hidePasswordConfirm ? hidden : show}
                                        alt="hidden"
                                    />
                                </button>
                            </div>
                            <div className={styles.BtnCenter}>
                                <ButtonPrimary
                                    onClick={handleSubmit}
                                    className={styles.Btn}
                                    disabled={!isValid && !dirty}
                                    type="submit"
                                >
                                создать
                                </ButtonPrimary>
                            </div>
                        </div>

                    )}

                </Formik>

            </div>
        </FormLayout>
    )
}

export default Registration
