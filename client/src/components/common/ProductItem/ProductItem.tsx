import { FC } from 'react'
import styles from './ProductItem.module.scss'

import heart from '@assets/heartDark.svg'
import ButtonPrimary from '@components/UI/Buttons/ButtonPrimary/ButtonPrimary'
import AddButton from '@components/UI/Buttons/AddButton/AddButton'
import { IProduct } from '@redux/slices/product/products.interface'
import imageLoad from '@utils/imageLoad'

const ProductItem: FC<IProduct> = ({
    img, title, gramms, price
}) => {
    return (
        <div className={styles.Container}>
            <div className={styles.Image}>
                <img className={styles.MainImage} src={imageLoad(img)} alt="product" />
                <img className={styles.Heart} src={heart} alt="heart" />
            </div>
            <div className={styles.Text}>
                <div className={styles.Description}>
                    <p className={styles.Name}>
                        {title}
                    </p>
                    <p className={styles.Weight}>{gramms}</p>
                </div>
                <div className={styles.Price}>
                    {price}
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
