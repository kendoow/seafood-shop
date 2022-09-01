import FormLayout from '@components/layouts/FormLayout/FormLayout'
import ButtonPrimary from '@components/UI/Buttons/ButtonPrimary/ButtonPrimary'
import Input from '@components/UI/Input/Input'
import { Formik } from 'formik'
import { FC, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import * as yup from 'yup'

import styles from './ResetPassword.module.scss'
import hidden from '@assets/hidden.svg'
import show from '@assets/show.svg'
import { authResetPassword } from '@redux/slices/auth/auth.actions'
import useTypedDispatch from '@hooks/useTypedDispatch'

const validationSchema = yup.object().shape({
    password: yup.string().typeError('Должно быть строкой').min(5, 'Минимальная длина поля - 5 символов').max(20, 'Максимальная длина поля - 20 символов')
        .required('Это поле обязательно'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Это поле обязательно')
})

const ResetPassword: FC = () => {
    const dispatch = useTypedDispatch()
    const [hidePassword, setHidePassword] = useState<boolean>(true)
    const [hideConfirmPassword, setHideConfirmPassword] = useState<boolean>(true)
    const navigate = useNavigate()
    const [error, setError] = useState<null | string>(null)
    const { id } = useParams()
    const handlerClick = (password: string, confirmPassword: string) => {
        dispatch(authResetPassword({ id, password, confirmPassword })).unwrap()
            .then(() => navigate('/'))
            .catch((e: string) => e.includes('Ошибка!') && setError('Ссылка недействительна, попробуйте еще раз'))
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
                        password: '',
                        confirmPassword: ''
                    }}
                    validateOnBlur
                    onSubmit={(values) => handlerClick(values.password, values.confirmPassword)}
                    validationSchema={validationSchema}
                >
                    {({
                        values, errors, touched, handleChange, handleBlur, handleSubmit,
                    }) => (
                        <div className={styles.InputsWrapper}>
                            {touched.password && errors.password && <p className={styles.Error}>{errors.password}</p>}
                            <div className={styles.PasswordWrapper}>
                                <Input
                                    className={touched.password && errors.password && styles.ErrorValid}
                                    placeholder="Новый пароль"
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
                            {touched.confirmPassword && errors.confirmPassword && <p className={styles.Error}>{errors.confirmPassword}</p>}
                            <div className={styles.PasswordWrapper}>
                                <Input
                                    className={touched.confirmPassword && errors.confirmPassword && styles.ErrorValid}
                                    placeholder="Повторите"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.confirmPassword}
                                    name="confirmPassword"
                                    type={hidePassword ? 'password' : 'text'}
                                />
                                <button className={styles.ToggleShow} onClick={() => setHideConfirmPassword(!hideConfirmPassword)}>
                                    <img
                                        src={hideConfirmPassword ? hidden : show}
                                        alt="hidden"
                                    />
                                </button>
                            </div>
                            {error ? <div className={styles.Error}>{error}</div> : <> </>}
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

export default ResetPassword
