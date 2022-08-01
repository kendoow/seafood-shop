import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface AddButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode,
    className?: string,
    disabled?:boolean,

}
