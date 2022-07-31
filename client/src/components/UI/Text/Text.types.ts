import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface TextProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  className?: string;
  size?: 'lg' | 'md' | 'sm';
  color?: 'black' | 'white';
  textTransform?: 'none' | 'lowercase';
}
