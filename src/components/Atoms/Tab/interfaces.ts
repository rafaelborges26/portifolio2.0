import { HTMLAttributes } from 'react';

export type ITab = HTMLAttributes<HTMLButtonElement> & ITabStyles

export interface ITabStyles {
    teste?: boolean
}