import styled, { css } from 'styled-components'
import { ILogoStyles } from './interfaces'
import { Themes } from '@/styles/themes'

export const Container = styled.div<ILogoStyles>`
    height: 8rem;
    width: 8rem;

    display: flex;
    align-items: center;
    justify-content: center;
    background: ${Themes.colors.blue900};
    border-radius: 2rem;

    img {
        width: 3.5rem;
        height: 3.5rem;
    }

    
    ${props => props.variant === 'secondary' && css`
        border-radius: 50%;
        width: 6rem;
        height: 6rem;
        color: ${Themes.colors.blue900};;
    `};
`