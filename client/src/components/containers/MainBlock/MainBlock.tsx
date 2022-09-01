import { FC } from 'react'

import ButtonPrimary from '@components/UI/Buttons/ButtonPrimary/ButtonPrimary'

import Text from '@components/UI/Text/Text'

import styles from './MainBlock.module.scss'
import Arrow from '@assets/downArrow.svg'
import mainBg from '@assets/mainFish.png'
import useTypedDispatch from '@hooks/useTypedDispatch'
import { authLogout } from '@redux/slices/auth/auth.actions'
import { useNavigate } from 'react-router-dom'

const MainBlock: FC = () => {
    const dispatch = useTypedDispatch()
    const navigate = useNavigate()
    const logoutHandler = () => {
        dispatch(authLogout())
    }

    return (
        <div className={styles.Container}>
            <Text className={styles.Title} size="lg" textTransform="lowercase">Свежая икра</Text>
            <div className={styles.Grid}>
                <div className={styles.Text}>

                    <Text className={styles.Decription} size="md">
                        Прямые поставки красной икры и рыбы с Камчатки
                    </Text>
                    <Text className={styles.Decription} size="md">
                        Более 10 лет на рынке
                    </Text>
                    <Text className={styles.Decription} size="md">
                        Сотни довольных клиентов
                    </Text>
                    <a
                        onClick={() => navigate('/')}
                        href="#products"
                        className={styles.NavItem}
                    >
                        <ButtonPrimary className={styles.Btn} extraType="Secondary">
                            {' '}

                            К продукции

                        </ButtonPrimary>
                    </a>
                </div>

                <div className={styles.Image}>
                    <img src={mainBg} alt="fish" />
                </div>
            </div>
            <a
                onClick={() => navigate('/')}
                href="#products"
                className={styles.NavItem}
            >
                <img className={styles.Arrow} src={Arrow} alt="arrow" />
            </a>
        </div>
    )
}

export default MainBlock
