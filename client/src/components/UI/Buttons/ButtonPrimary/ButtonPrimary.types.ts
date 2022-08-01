import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface ButtonPrimaryProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode,
    className?: string,
    disabled?:boolean,
    type?: 'Primary' | 'Secondary' | 'SecondaryArrowed' |'PrimaryMin'

}
