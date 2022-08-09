import { FC } from 'react'
import styles from './CartItem.module.scss'
import ikra from '@assets/ikra.png'
import heart from '@assets/heartDark.svg'
import ButtonPrimary from '@components/UI/Buttons/ButtonPrimary/ButtonPrimary'
import AddButton from '@components/UI/Buttons/AddButton/AddButton'

const CartItem: FC = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.Image}>
                <img width={200} height={200} src={ikra} alt="item" />
            </div>
            <div className={styles.Text}>
                <div className={styles.Main}>
                    <div className={styles.MainText}>
                        <p className={styles.Name}>Икра кеты</p>
                        <p className={styles.Weight}>100гр</p>
                    </div>
                    <img width={30} height={30} src={heart} alt="heart" />
                </div>
                <div className={styles.Price}>
                657 ₽
                </div>
                <div className={styles.Btns}>
                    <ButtonPrimary extraType="PrimaryMin">Удалить</ButtonPrimary>
                    <AddButton>1</AddButton>
                </div>

            </div>
        </div>
    )
}

export default CartItem
