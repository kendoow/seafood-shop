import { FC, useState } from 'react'
import FormLayout from '@components/layouts/FormLayout/FormLayout'
import ButtonPrimary from '@components/UI/Buttons/ButtonPrimary/ButtonPrimary'
import { Link } from 'react-router-dom'
import styles from './Registration.module.scss'
import Input from '@components/UI/Input/Input'
import useInput from '@hooks/useInput'
import hidden from '@assets/hidden.svg'
import show from '@assets/show.svg'

const Registration: FC = () => {
    const [hidePassword, setHidePassword] = useState<boolean>(true)
    const [hidePasswordRepeat, setHidePasswordRepeat] = useState<boolean>(true)
    const [validErrorMail, setValidErrorMail] = useState<boolean>(false)
    const [validErrorPassword, setValidErrorPassword] = useState<boolean>(false)
    const [validName, setValidName] = useState<boolean>(false)
    const [validErrorRepeat, setValidErrorRepeat] = useState<boolean>(false)

    const nameRegistration = useInput('', { isEmpty: true })
    const emailRegistration = useInput('', { isEmpty: true, minLength: 5, isEmail: true })
    const passwordRegistration = useInput('', { isEmpty: true, minLength: 3 })
    const passwordRepeat = useInput('', { isEmpty: true, minLength: 3 })

    const handlerButtonRegistration = () => {
        if (!emailRegistration.inputVaild) {
            setValidErrorMail(true)
        } else {
            setValidErrorMail(false)
        }
        if (!nameRegistration.inputVaild) {
            setValidName(true)
        } else {
            setValidName(false)
        }
        if (!passwordRegistration.inputVaild) {
            setValidErrorPassword(true)
        } else {
            setValidErrorPassword(false)
        }
        if (passwordRepeat.value !== passwordRegistration.value) {
            setValidErrorRepeat(true)
        } else {
            setValidErrorRepeat(false)
        }
    }

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
                <div className={styles.InputsWrapper}>
                    {validName && <div className={styles.Error}>Поле не может быть пустым</div>}
                    <Input
                        value={nameRegistration.value}
                        onChange={nameRegistration.onChange}
                        onBlur={nameRegistration.onBlur}
                        className={validErrorMail ? styles.ErrorValid : styles.Input}
                        placeholder="Имя"
                        type="text"
                    />
                    {validErrorMail && <div className={styles.Error}>Введите почту корректно</div>}
                    <Input
                        value={emailRegistration.value}
                        onChange={emailRegistration.onChange}
                        onBlur={emailRegistration.onBlur}
                        className={validErrorMail ? styles.ErrorValid : styles.Input}
                        placeholder="Почта"
                        type="text"
                    />
                    {validErrorPassword && <div className={styles.Error}>Введите пароль корректно</div>}
                    <div className={styles.PasswordWrapper}>

                        <Input
                            value={passwordRegistration.value}
                            onChange={passwordRegistration.onChange}
                            onBlur={passwordRegistration.onBlur}
                            className={validErrorPassword ? styles.ErrorValid : styles.InputPassword}
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
                    {validErrorRepeat && <div className={styles.Error}>Пароли не совпадают</div>}
                    <div className={styles.PasswordWrapper}>

                        <Input
                            value={passwordRepeat.value}
                            onChange={passwordRepeat.onChange}
                            onBlur={passwordRepeat.onBlur}
                            className={validErrorRepeat ? styles.ErrorValid : styles.InputPassword}
                            placeholder="Повторите пароль"
                            type={hidePasswordRepeat ? 'password' : 'text'}
                        />

                        <button className={styles.ToggleShow} onClick={() => setHidePasswordRepeat(!hidePasswordRepeat)}>
                            <img
                                src={hidePasswordRepeat ? hidden : show}
                                alt="hidden"
                            />
                        </button>
                    </div>
                </div>

                <ButtonPrimary
                    onClick={handlerButtonRegistration}
                    className={styles.Btn}
                >
                    создать
                </ButtonPrimary>
            </div>
        </FormLayout>
    )
}

export default Registration
