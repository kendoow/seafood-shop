import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface InputProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    type:string,
    value: string,
    className?: string
}
