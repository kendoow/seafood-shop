import { FC, useState } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
import FormLayout from '@components/layouts/FormLayout/FormLayout'
import ButtonPrimary from '@components/UI/Buttons/ButtonPrimary/ButtonPrimary'
import Input from '@components/UI/Input/Input'

import styles from './Login.module.scss'

import { authLogin } from '@redux/slices/auth/auth.actions'
import authSelector from '@redux/slices/auth/auth.selector'
import useTypedSelector from '@hooks/useTypedSelector'
import useTypedDispatch from '@hooks/useTypedDispatch'

import hidden from '@assets/hidden.svg'
import show from '@assets/show.svg'

const Login: FC = () => {
    const [hidePassword, setHidePassword] = useState<boolean>(true)

    const { error } = useTypedSelector(authSelector)
    const dispatch = useTypedDispatch()

    const validationSchema = yup.object().shape({
        email: yup.string().email('Введите верный email').required('Это поле обязательно'),
        password: yup.string().typeError('Должно быть строкой').min(3, 'Минимальная длина поля - 5 символов').max(20, 'Максимальная длина поля - 20 символов')
            .required('Это поле обязательно'),
    })

    return (
        <FormLayout>
            <div className={styles.Container}>
                <Link className={styles.Exit} to="/" />
                <div className={styles.Title}>
                    Вход
                </div>
                <div className={styles.Redirect}>
                    <div>
                        Нет аккаунта?
                    </div>
                    <Link className={styles.Link} to="/registration">
                        Создать
                    </Link>
                </div>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',

                    }}
                    validateOnBlur
                    onSubmit={(values) => dispatch(authLogin(values))}
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
                                placeholder="Почта"
                                type="text"
                            />
                            {touched.password && errors.password && <p className={styles.Error}>{errors.password}</p>}
                            <div className={styles.PasswordWrapper}>
                                <Input
                                    className={touched.password && errors.password && styles.ErrorValid}
                                    placeholder="Пароль"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.password}
                                    name="password"
                                    type={hidePassword ? 'password' : 'text'}
                                />
                                <button className={styles.ToggleShow} onClick={() => setHidePassword(!hidePassword)}>
                                    <img
                                        src={hidePassword ? hidden : show}
                                        alt="hidden"
                                    />
                                </button>
                            </div>
                            {error ? <div className={styles.Error}>Неправильная почта или пароль</div> : <> </>}
                            <div className={styles.BtnContainer}>
                                <ButtonPrimary
                                    onClick={handleSubmit}
                                    className={styles.Btn}
                                >
                                    Войти
                                </ButtonPrimary>
                            </div>
                        </div>

                    )}

                </Formik>

            </div>
        </FormLayout>
    )
}

export default Login
