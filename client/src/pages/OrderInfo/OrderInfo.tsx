import OrderInfoContainer from '@components/containers/OrderInfoContainer/OrderInfoContainer'
import Header from '@components/layouts/Layout/Header/Header'
import React, { FC } from 'react'
import styles from './OrderInfo.module.scss'

const OrderInfo: FC = () => {
    return (
        <>
            <Header />
            <OrderInfoContainer />
        </>
    )
}

export default OrderInfo
