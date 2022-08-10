import CommentsSlider from '@components/common/Comments/CommentsSlider/CommentsSlider'
import CommentsItem from '@components/common/Comments/CommentsItem/CommentsItem'
import { FC } from 'react'
import styles from './CommentsBlock.module.scss'

const CommentsBlock: FC = () => {
    return (
        <div className={styles.Container}>
            <CommentsSlider>
                {/* <CommentsItem title="1" image="1" description="1" /> */}
            </CommentsSlider>
        </div>
    )
}

export default CommentsBlock
