import OrderContainer from '@components/containers/OrderContainer/OrderContainer'
import Header from '@components/layouts/Layout/Header/Header'
import { FC } from 'react'

const Order:FC = () => {
    return (
        <>
            <Header />
            <OrderContainer />
        </>
    )
}

export default Order
