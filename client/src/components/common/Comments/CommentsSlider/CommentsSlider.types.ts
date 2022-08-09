import { HTMLAttributes, MouseEventHandler, ReactNode } from 'react'

export interface SliderProps {
    children: ReactNode
}

export interface ArrowProps {
    className?: string;
    style?: HTMLAttributes<HTMLDivElement>;
    onClick?: MouseEventHandler<HTMLDivElement>;
}
