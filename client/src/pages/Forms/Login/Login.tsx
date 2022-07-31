import FormLayout from '@components/layouts/FormLayout/FormLayout'
import ButtonPrimary from '@components/UI/Buttons/ButtonPrimary/ButtonPrimary'
import Input from '@components/UI/Input/Input'
import useInput from '@hooks/useInput'
import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Login.module.scss'
import hidden from '@assets/hidden.svg'
import show from '@assets/show.svg'

const Login: FC = () => {
    const [hidePassword, setHidePassword] = useState<boolean>(true)
    const [validErrorMail, setValidErrorMail] = useState<boolean>(false)
    const [validErrorPassword, setValidErrorPassword] = useState<boolean>(false)
    const emailLogin = useInput('', { isEmpty: true, minLength: 5, isEmail: true })

    const passwordLogin = useInput('', { isEmpty: true, minLength: 3 })

    const handlerButtonLogin = () => {
        if (!emailLogin.inputVaild) {
            setValidErrorMail(true)
        } else {
            setValidErrorMail(false)
        }
        if (!passwordLogin.inputVaild) {
            setValidErrorPassword(true)
        } else {
            setValidErrorPassword(false)
        }
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
                <div className={styles.InputsWrapper}>

                    <Input
                        value={emailLogin.value}
                        onChange={emailLogin.onChange}
                        onBlur={emailLogin.onBlur}
                        className={styles.Input}
                        placeholder="Почта"
                        type="text"
                    />
                    <div className={styles.PasswordWrapper}>

                        <Input
                            value={passwordLogin.value}
                            onChange={passwordLogin.onChange}
                            onBlur={passwordLogin.onBlur}
                            className={styles.InputPassword}
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
                </div>

                <ButtonPrimary
                    onClick={handlerButtonLogin}
                    className={styles.Btn}
                >
                    Войти
                </ButtonPrimary>
            </div>
        </FormLayout>
    )
}

export default Login
