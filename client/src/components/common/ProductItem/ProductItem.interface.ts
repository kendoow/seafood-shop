import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface IProductItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    id:number,
    title: string,
    price: number,
    gramms: number,
    img:string
}
