import {
    DetailedHTMLProps, HTMLAttributes, Dispatch, SetStateAction
} from 'react'

export interface BurgerMenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    active:boolean,
    setActive:Dispatch<SetStateAction<boolean>>,
}
