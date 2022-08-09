import React, { FC } from 'react'
import { InputProps } from './Input.types'
import styles from './Input.module.scss'
import cn from 'classnames'

const Input: FC<InputProps> = ({
    type, onChange, value, onBlur, placeholder, className, name
}) => {
    return (
        <div>
            <input className={cn(className, styles.Input)} name={name} type={type} onChange={onChange} value={value} onBlur={onBlur} placeholder={placeholder} />
        </div>
    )
}

export default Input
