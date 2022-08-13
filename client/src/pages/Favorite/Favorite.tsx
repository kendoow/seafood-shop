import FavoriteContainer from '@components/containers/FavoriteContainer/FavoriteContainer'
import ProfileLayout from '@components/layouts/ProfileLayout/ProfileLayout'
import { FC } from 'react'
import styles from './Favorite.module.scss'

const Favorite: FC = () => {
    return (
        <ProfileLayout>
            <FavoriteContainer />
            {/* </FavoriteContainer> */}
        </ProfileLayout>
    )
}

export default Favorite
