import { FC, useState } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import FormLayout from '@components/layouts/FormLayout/FormLayout'
import ButtonPrimary from '@components/UI/Buttons/ButtonPrimary/ButtonPrimary'
import Input from '@components/UI/Input/Input'

import styles from './Login.module.scss'

import { authLogin } from '@redux/slices/auth/auth.actions'

import useTypedDispatch from '@hooks/useTypedDispatch'

import hidden from '@assets/hidden.svg'
import show from '@assets/show.svg'
import { IUserLogin } from '@redux/slices/auth/auth.interface'

const Login: FC = () => {
    const [hidePassword, setHidePassword] = useState<boolean>(true)
    const [errorLogin, setErrorLogin] = useState<null | string>(null)
    const navigate = useNavigate()
    const dispatch = useTypedDispatch()

    const validationSchema = yup.object().shape({
        email: yup.string().email('Введите верный email').required('Это поле обязательно'),
        password: yup.string().typeError('Должно быть строкой').min(5, 'Минимальная длина поля - 5 символов').max(20, 'Максимальная длина поля - 20 символов')
            .required('Это поле обязательно'),
    })

    const submitHandler = (values: IUserLogin) => {
        dispatch(authLogin(values)).unwrap()
            .then(() => navigate('/'))
            .catch((e: string) => e.includes('Ошибка логина') && setErrorLogin('Неправильный пароль'))
    }

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
                <div className={styles.Redirect}>
                    <div>
                        Забыли пароль?
                    </div>
                    <Link className={styles.Link} to="/reset">
                        Восстановить
                    </Link>

                </div>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',

                    }}
                    validateOnBlur
                    onSubmit={(values) => submitHandler(values)}
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
                            {errorLogin ? <div className={styles.Error}>{errorLogin}</div> : <> </>}
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
