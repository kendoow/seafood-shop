import {
    DetailedHTMLProps, HTMLAttributes, Dispatch, SetStateAction
} from 'react'

export interface DropDownProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    active:boolean,
    setActive:Dispatch<SetStateAction<boolean>>,
}
