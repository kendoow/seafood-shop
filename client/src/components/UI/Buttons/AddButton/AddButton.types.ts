import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface AddButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode,
    className?: string,
    disabled?:boolean,
    initialCounter: number,
    id: number
}
