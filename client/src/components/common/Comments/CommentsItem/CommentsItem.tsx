import imageLoad from '@utils/imageLoad'
import { FC } from 'react'
import styles from './CommentsItem.module.scss'
import { CartModalProps } from './CommentsItem.types'

const CommentsItem: FC<CartModalProps> = ({ img, title, description }) => {
    return (
        <div className={styles.Container}>
            <div className={styles.Avatar}>
                <div className={styles.Image}>
                    <img width={90} height={90} src={imageLoad(img)} alt="userIcon" />
                </div>
                <div className={styles.Title}>
                    {' '}
                    {title}
                    {' '}
                </div>
            </div>
            <div className={styles.Description}>{description}</div>
        </div>
    )
}

export default CommentsItem
