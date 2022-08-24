import useTypedDispatch from '@hooks/useTypedDispatch'
import useTypedSelector from '@hooks/useTypedSelector'
import Favorite from '@pages/Favorite/Favorite'
import Login from '@pages/Forms/Login/Login'
import Registration from '@pages/Forms/Registration/Registration'
import Main from '@pages/Main/Main'
import Order from '@pages/Order/Order'
import OrderPassed from '@pages/OrderPassed/OrderPassed'
import OrderInfo from '@pages/OrderInfo/OrderInfo'
import { authRefresh } from '@redux/slices/auth/auth.actions'
import authSelector from '@redux/slices/auth/auth.selector'

import { FC, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

const AppRouter: FC = () => {
    const dispatch = useTypedDispatch()
    const { isAuth } = useTypedSelector(authSelector)

    useEffect(() => {
        dispatch(authRefresh())
    }, [])

    return (
        <Routes>
            <Route path="/" element={<Main />} />

            <Route path="/favorite" element={<Favorite />} />
            {isAuth ?
                <>
                    <Route path="/order" element={<Order />} />
                    <Route path="/order_passed" element={<OrderPassed />} />
                    <Route path="/orderinfo" element={<OrderInfo />} />
                </>
                : <>
                    <Route path="/login" element={<Login />} />
                    <Route path="/registration" element={<Registration />} />
                </>}
            <Route path="*" element={<Main />} />
        </Routes>
    )
}

export default AppRouter
