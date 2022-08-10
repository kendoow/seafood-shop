import CommentsItem from '@components/common/Comments/CommentsItem/CommentsItem'
import CommentsBlock from '@components/containers/CommentsBlock/CommentsBlock'
import DeliveryBlock from '@components/containers/DeliveryBlock/DeliveryBlock'
import MainBlock from '@components/containers/MainBlock/MainBlock'
import ProductsBlock from '@components/containers/ProductsBlock/ProductsBlock'
import Layout from '@components/layouts/Layout/Layout'

const Main = () => (

    <Layout>
        <MainBlock />
        <ProductsBlock />
        <DeliveryBlock />
        {/* <CommentsBlock /> */}
    </Layout>

)

export default Main
