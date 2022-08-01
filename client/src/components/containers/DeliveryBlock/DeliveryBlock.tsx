import ButtonPrimary from '@components/UI/Buttons/ButtonPrimary/ButtonPrimary'
import Text from '@components/UI/Text/Text'
import { FC } from 'react'
import styles from './DeliveryBlock.module.scss'
import fish from '@assets/deliveryFish.png'

const DeliveryBlock: FC = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.Text}>
                <Text className={styles.Title} textTransform="lowercase" size="lg">Доставка</Text>
                <Text className={styles.Decription} size="md">В пределах и 10км за мкадом</Text>
                <Text className={styles.Decription} size="md">Стоимость - 500 рублей </Text>
                <Text className={styles.Decription} size="md">Более 5000 - бесплатно</Text>
                <Text className={styles.Decription} size="md">Доставим в течении 24 часов</Text>
                <ButtonPrimary className={styles.Btn} type="SecondaryArrowed">Оформить</ButtonPrimary>
            </div>
            <div className={styles.Image}>
                <img src={fish} alt="fish" />
            </div>

        </div>
    )
}

export default DeliveryBlock
