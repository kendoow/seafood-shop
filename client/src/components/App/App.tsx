import React, { FC } from 'react'

import heart from '@assets/heart.svg'

import styles from './App.module.scss'

const App: FC = () => (

    <div className={styles.Container}>
            App
        <img
            width={70}
            height={70}
            src={heart}
            alt="heart"
        />
    </div>
)

export default App
