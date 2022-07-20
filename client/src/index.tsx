import ReactDOM from 'react-dom/client'
import React from 'react'

import App from '@components/App/App'

import '@styles/global.scss'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
)

root.render(<App />)
