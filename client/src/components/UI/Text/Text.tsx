import { FC } from 'react'
import { TextProps } from './Text.types'
import styles from './Text.module.scss'
import cn from 'classnames'

const Text: FC<TextProps> = ({
    children, className, size = 'md', color = 'white', textTransform = 'none'
}) => {
    return (
        <div className={cn(styles.Text, className, {
            [styles.lg]: size === 'lg',
            [styles.md]: size === 'md',
            [styles.sm]: size === 'sm',
            [styles.black]: color === 'black',
            [styles.white]: color === 'white',
            [styles.lower]: textTransform === 'lowercase'
        })}
        >
            {children}
        </div>
    )
}

export default Text
