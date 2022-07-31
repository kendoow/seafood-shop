import Login from '@pages/Forms/Login/Login'
import Registration from '@pages/Forms/Registration/Registration'
import Main from '@pages/Main/Main'
import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

const AppRouter: FC = () => (
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
    </Routes>
)

export default AppRouter
