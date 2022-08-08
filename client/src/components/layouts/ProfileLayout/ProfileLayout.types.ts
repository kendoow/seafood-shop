import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface ProfileLayoutProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode,
}
