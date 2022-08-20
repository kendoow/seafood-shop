import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface OrderPaymentCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string,
    description:string
}
