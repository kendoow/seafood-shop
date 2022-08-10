import ButtonPrimary from '@components/UI/Buttons/ButtonPrimary/ButtonPrimary'
import Text from '@components/UI/Text/Text'
import { FC } from 'react'
import styles from './DeliveryBlock.module.scss'
import fish from '@assets/deliveryFish.png'
import car from '@assets/car.png'
import clock from '@assets/clock.png'
import cash from '@assets/cash.png'

const DeliveryBlock: FC = () => {
    return (
        <div id="delivery" className={styles.Container}>
            <div className={styles.Text}>
                <Text className={styles.Title} textTransform="lowercase" size="lg">Доставка</Text>
                <div className={styles.DecrBlock}>
                    <div className={styles.ImgBlock}>
                        <img src={car} alt="car" />
                    </div>
                    <Text className={styles.Decription} size="md">
                        осуществляется в пределах МКАД,
                        а также 10км от МКАД
                    </Text>
                </div>
                <div className={styles.DecrBlock}>
                    <div className={styles.ImgBlock}>
                        <img src={cash} alt="car" />
                    </div>
                    <Text className={styles.Decription} size="md">
                        500 ₽, а при сумме заказа более 5000 ₽-
                        бесплатно
                        {' '}
                    </Text>
                </div>
                <div className={styles.DecrBlock}>
                    <div className={styles.ImgBlock}>
                        <img src={clock} alt="clock" />
                    </div>
                    <Text className={styles.Decription} size="md">доставим в течении 24 часов</Text>
                </div>
                <ButtonPrimary className={styles.Btn} extraType="SecondaryArrowed">Оформить</ButtonPrimary>
            </div>
            <div className={styles.Image}>
                <img src={fish} alt="fish" />
            </div>

        </div>
    )
}

export default DeliveryBlock
