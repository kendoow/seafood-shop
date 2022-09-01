import ProductItem from '@components/common/ProductItem/ProductItem'
import Spiner from '@components/UI/Spiner/Spiner'
import useTypedDispatch from '@hooks/useTypedDispatch'
import useTypedSelector from '@hooks/useTypedSelector'
import { fetchCart } from '@redux/slices/cart/cart.actions'
import { fetchFavorite } from '@redux/slices/favorite/favorite.actions'
import { fetchProducts } from '@redux/slices/product/products.actions'
import { IProduct } from '@redux/slices/product/products.interface'
import productsSelector from '@redux/slices/product/products.selector'
import { FC, useEffect } from 'react'
import styles from './ProductsBlock.module.scss'

const ProductsBlock: FC = () => {
    const dispatch = useTypedDispatch()

    const { loading, products } = useTypedSelector(productsSelector)

    useEffect(() => {
        dispatch(fetchProducts())
        dispatch(fetchFavorite())
        dispatch(fetchCart())
    }, [])

    return (
        <div id="products" className={styles.Scroll}>

            {loading ?
                <div className={styles.Spiner}>
                    <Spiner />
                </div>
                :

                <div className={styles.Container}>
                    {
                        !!products?.length && products.map((product: IProduct) => <ProductItem
                            id={product.id}
                            key={product.id}
                            title={product.title}
                            gramms={product.gramms}
                            price={product.price}
                            img={product.img}
                        />)
                    }
                </div>}
        </div>
    )
}

export default ProductsBlock
