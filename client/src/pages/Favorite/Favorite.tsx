import FavoriteContainer from '@components/containers/FavoriteContainer/FavoriteContainer'
import Header from '@components/layouts/Layout/Header/Header'

import { FC } from 'react'
import styles from './Favorite.module.scss'

const Favorite: FC = () => {
    return (
        <>
            <Header />
            <FavoriteContainer />
        </>
    )
}

export default Favorite
