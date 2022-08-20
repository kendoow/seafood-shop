import React, { FC } from 'react'
import { InputProps } from './Input.interface'
import styles from './Input.module.scss'
import cn from 'classnames'

const Input: FC<InputProps> = ({
    className, ...props
}) => {
    return (
        <div>
            <input {...props} className={cn(className, styles.Input)} />
        </div>
    )
}

export default Input
