import {
    DetailedHTMLProps, HTMLAttributes, ImgHTMLAttributes
} from 'react'

export interface CartModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    img:string,
    title:string,
    description:string
}
