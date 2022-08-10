import { FC } from 'react'
import { Link as AnimatedLink, animateScroll as scroll } from 'react-scroll'

import ButtonPrimary from '@components/UI/Buttons/ButtonPrimary/ButtonPrimary'

import Text from '@components/UI/Text/Text'

import styles from './MainBlock.module.scss'
import Arrow from '@assets/downArrow.svg'
import mainBg from '@assets/mainFish.png'

const MainBlock: FC = () => {
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
                    <ButtonPrimary className={styles.Btn} extraType="Secondary">К продукции</ButtonPrimary>
                </div>

                <div className={styles.Image}>
                    <img src={mainBg} alt="fish" />
                </div>
            </div>
            <AnimatedLink
                to="products"
                smooth
                offset={-70}
                duration={500}
                className={styles.NavItem}
            >
                <img className={styles.Arrow} src={Arrow} alt="arrow" />
            </AnimatedLink>
        </div>
    )
}

export default MainBlock
