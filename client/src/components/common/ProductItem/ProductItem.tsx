import { FC } from 'react'
import styles from './ProductItem.module.scss'
import ikra from '@assets/ikra.png'
import heart from '@assets/heartDark.svg'
import ButtonPrimary from '@components/UI/Buttons/ButtonPrimary/ButtonPrimary'
import AddButton from '@components/UI/Buttons/AddButton/AddButton'

const ProductItem: FC = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.Image}>
                <img className={styles.MainImage} src={ikra} alt="product" />
                <img className={styles.Heart} src={heart} alt="heart" />
            </div>
            <div className={styles.Text}>
                <div className={styles.Description}>
                    <p className={styles.Name}>
                    Икра кеты
                    </p>
                    <p className={styles.Weight}>100гр</p>
                </div>
                <div className={styles.Price}>
                657 ₽
                </div>
                <div className={styles.Btns}>
                    <ButtonPrimary extraType="PrimaryMin">В корзину</ButtonPrimary>
                    <AddButton>1</AddButton>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
