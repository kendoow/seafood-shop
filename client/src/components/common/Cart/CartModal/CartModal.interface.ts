import {
    DetailedHTMLProps, HTMLAttributes, Dispatch, SetStateAction
} from 'react'

export interface CartModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    active:boolean,
    setActive:Dispatch<SetStateAction<boolean>>,
}
