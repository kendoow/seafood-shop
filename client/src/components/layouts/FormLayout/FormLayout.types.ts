import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface FormLayoutProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode,
}
