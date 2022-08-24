import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface ButtonPrimaryProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode,
    type?:string,
    className?: string,
    disabled?:boolean,
    extraType?: 'Primary' | 'PrimaryBig' | 'Secondary' | 'SecondaryArrowed' |'PrimaryMin' | 'SecondaryReversed' | 'Rounded' | 'RoundedReversed'

}
