import ButtonPrimary from '@components/UI/Buttons/ButtonPrimary/ButtonPrimary'
import useTypedSelector from '@hooks/useTypedSelector'
import authSelector from '@redux/slices/auth/auth.selector'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { EmptySpaceProps } from './EmptySpace.interface'
import styles from './EmptySpace.module.scss'

const EmptySpace: FC<EmptySpaceProps> = ({
    img, title, btnText, isVisible = true
}) => {
    const { isAuth } = useTypedSelector(authSelector)

    return (
        <div className={styles.Container}>
            <img className={styles.Image} src={img} alt="icon" />
            <p className={styles.Title}>{title}</p>
            {isVisible ?
                <Link to={isAuth ? '/' : '/login'}>
                    <ButtonPrimary className={styles.Btn} extraType="PrimaryBig">{btnText}</ButtonPrimary>
                </Link> : ''}
        </div>
    )
}

export default EmptySpace
