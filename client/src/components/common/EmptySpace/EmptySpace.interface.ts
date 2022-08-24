import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface EmptySpaceProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  img: string;
  title: string;
  btnText?: string;
  isVisible?:boolean;
}
