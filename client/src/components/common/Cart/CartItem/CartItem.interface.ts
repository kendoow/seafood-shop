import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface CartItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    counter: number,
    id: number,
    img: string,
    title: string,
    gramms: number,
    price: number,
}

export default CartItemProps
