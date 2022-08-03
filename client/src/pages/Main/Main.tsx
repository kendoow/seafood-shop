import CartItem from '@components/common/Cart/CartItem/CartItem'
import CartModal from '@components/common/Cart/CartModal/CartModal'
import DeliveryBlock from '@components/containers/DeliveryBlock/DeliveryBlock'
import MainBlock from '@components/containers/MainBlock/MainBlock'
import ProductsBlock from '@components/containers/ProductsBlock/ProductsBlock'
import Layout from '@components/layouts/Layout/Layout'

const Main = () => (

    <Layout>
        <MainBlock />
        <ProductsBlock />
        <DeliveryBlock />
    </Layout>

)

export default Main
