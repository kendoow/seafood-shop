import CommentsSlider from '@components/common/Comments/CommentsSlider/CommentsSlider'
import CommentsItem from '@components/common/Comments/CommentsItem/CommentsItem'
import { FC, useEffect } from 'react'
import styles from './CommentsBlock.module.scss'
import useTypedSelector from '@hooks/useTypedSelector'
import useTypedDispatch from '@hooks/useTypedDispatch'
import commentsSelector from '@redux/slices/comments/comments.selector'
import { IComment } from '@redux/slices/comments/comments.interface'
import { fetchComments } from '@redux/slices/comments/comments.actions'

const CommentsBlock: FC = () => {
    const dispatch = useTypedDispatch()

    const { comments } = useTypedSelector(commentsSelector)

    useEffect(() => {
        dispatch(fetchComments())
    }, [])

    return (
        <div id="comments" className={styles.Scroll}>
            <div className={styles.Container}>
                <CommentsSlider>
                    {
                        !!comments?.length && comments.map((comment: IComment) => <CommentsItem
                            id={comment.id}
                            key={comment.title}
                            title={comment.title}
                            description={comment.description}
                            img={comment.img}
                        />)
                    }
                </CommentsSlider>
            </div>
        </div>
    )
}

export default CommentsBlock
