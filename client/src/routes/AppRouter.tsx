import useTypedDispatch from '@hooks/useTypedDispatch'
import useTypedSelector from '@hooks/useTypedSelector'
import Login from '@pages/Forms/Login/Login'
import Registration from '@pages/Forms/Registration/Registration'
import Main from '@pages/Main/Main'
import Profile from '@pages/Profile/Profile'
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

            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Main />} />
            {isAuth ?
                <>

                </>
                : <>
                    <Route path="/login" element={<Login />} />
                    <Route path="/registration" element={<Registration />} />
                  </>}
        </Routes>
    )
}

export default AppRouter
