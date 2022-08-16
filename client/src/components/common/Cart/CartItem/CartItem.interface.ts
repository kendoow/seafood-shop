import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface CartItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    counter: number,
    id: number,
    img: string,
    title: string,
    gramms: string,
    price: string,
}

export default CartItemProps
