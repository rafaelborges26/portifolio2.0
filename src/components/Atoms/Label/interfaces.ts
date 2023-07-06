import { HTMLAttributes } from 'react';

export type ILabel = HTMLAttributes<HTMLDivElement> & ILabelStyles

export interface ILabelStyles {
    colorSelected: 'blue' | 'white'
}