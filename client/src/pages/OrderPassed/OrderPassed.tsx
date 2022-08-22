import OrderPassedContainer from '@components/containers/OrderPassedContainer/OrderPassedContainer'
import Header from '@components/layouts/Layout/Header/Header'
import React, { FC } from 'react'

const OrderPassed:FC = () => {
    return (
        <>
            <Header />
            <OrderPassedContainer />
        </>
    )
}

export default OrderPassed
