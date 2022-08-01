import ProductItem from '@components/common/ProductItem/ProductItem'
import React, { FC } from 'react'
import styles from './ProductsBlock.module.scss'

const ProductsBlock: FC = () => {
    return (
        <div className={styles.Container}>
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
        </div>
    )
}

export default ProductsBlock
