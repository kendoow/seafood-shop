import CommentsSlider from '@components/common/Comments/ComentsSlider/ComentsSlider'
import CommentsItem from '@components/common/Comments/CommentsItem/CommentsItem'
import { FC } from 'react'
import styles from './CommentsBlock.module.scss'

const CommentsBlock: FC = () => {
    return (
        <div className={styles.Container}>
            <CommentsSlider>
                <div className={styles.Slider}>
                    <CommentsItem description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod eu aliquam mi sed nunc, enim. Urna, sollicitudin justo, lobortis sed. Tempor non aliquam lectus at nulla amet, sed pellentesque ridiculus." title="Максим" image="1" />
                    <CommentsItem description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod eu aliquam mi sed nunc, enim. Urna, sollicitudin justo, lobortis sed. Tempor non aliquam lectus at nulla amet, sed pellentesque ridiculus." title="Максим" image="1" />
                </div>
                <div className={styles.Slider}>
                    <CommentsItem description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod eu aliquam mi sed nunc, enim. Urna, sollicitudin justo, lobortis sed. Tempor non aliquam lectus at nulla amet, sed pellentesque ridiculus." title="Максим" image="1" />
                    <CommentsItem description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod eu aliquam mi sed nunc, enim. Urna, sollicitudin justo, lobortis sed. Tempor non aliquam lectus at nulla amet, sed pellentesque ridiculus." title="Максим" image="1" />
                </div>
            </CommentsSlider>
        </div>
    )
}

export default CommentsBlock
