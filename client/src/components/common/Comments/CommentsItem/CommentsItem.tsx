import { FC } from 'react'
import styles from './CommentsItem.module.scss'
import { CartModalProps } from './CommentsItem.types'

const CommentsItem: FC<CartModalProps> = ({ image, title, description }) => {
    return (
        <div className={styles.Container}>
            <div className={styles.Avatar}>
                <div className={styles.Image}>
                    <img width={90} height={90} src={image} alt="userIcon" />
                </div>
                <div className={styles.Title}>
                    {' '}
                    {title}
                    {' '}
                </div>
            </div>
            <p className={styles.Description}>{description}</p>
        </div>
    )
}

export default CommentsItem
