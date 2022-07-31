import ReactDOM from 'react-dom/client'
import React from 'react'

import '@styles/global.scss'
import AppRouter from './routes/AppRouter'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
)

root.render(
    <BrowserRouter>
        <AppRouter />
    </BrowserRouter>
)
