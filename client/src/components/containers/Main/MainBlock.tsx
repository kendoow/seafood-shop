import ButtonPrimary from '@components/UI/Buttons/ButtonPrimary/ButtonPrimary'
import Text from '@components/UI/Text/Text'
import { FC } from 'react'
import styles from './MainBlock.module.scss'
import Arrow from '@assets/downArrow.svg'
import { motion } from 'framer-motion'

const MainBlock: FC = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.Grid}>
                <motion.div initial={{ x: -1500, opacity: 0, }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1, ease: 'easeInOut' }} className={styles.Text}>
                    <Text className={styles.Title} size="lg" textTransform="lowercase">Свежая икра</Text>
                    <Text className={styles.Decription} size="md">
                        Прямые поставки красной икры и рыбы с Камчатки
                    </Text>
                    <Text className={styles.Decription} size="md">
                        Более 10 лет на рынке
                    </Text>
                    <Text className={styles.Decription} size="md">
                        Сотни довольных клиентов
                    </Text>
                    <ButtonPrimary className={styles.Btn} type="Secondary">К продукции</ButtonPrimary>
                </motion.div>

                <div className={styles.Image}>
                    <img src="" alt="fish" />
                </div>
            </div>
            <img className={styles.Arrow} src={Arrow} alt="arrow" />
        </div>
    )
}

export default MainBlock
