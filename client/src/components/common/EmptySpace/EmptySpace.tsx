import ButtonPrimary from '@components/UI/Buttons/ButtonPrimary/ButtonPrimary'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { EmptySpaceProps } from './EmptySpace.interface'
import styles from './EmptySpace.module.scss'

const EmptySpace: FC<EmptySpaceProps> = ({
    img, title, btnText, isVisible = true
}) => {
    return (
        <div className={styles.Container}>
            <img className={styles.Image} src={img} alt="icon" />
            <p className={styles.Title}>{title}</p>
            {isVisible ?
                <Link to="/">
                    <ButtonPrimary className={styles.Btn} extraType="PrimaryBig">{btnText}</ButtonPrimary>
                </Link> : ''}
        </div>
    )
}

export default EmptySpace
