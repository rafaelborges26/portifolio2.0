import { HTMLAttributes } from 'react';

export type IButton = HTMLAttributes<HTMLButtonElement> & IButtonStyles

export interface IButtonStyles {
    variant: 'primary' | 'label'
}