import styled, { css } from 'styled-components'
import { Themes } from '@/styles/themes'
import { IButtonStyles } from './interfaces'

export const Container = styled.button<IButtonStyles>`
    background: transparent;
    border: none;
    
    ${props => props.variant === 'label' && css`
    color: ${Themes.colors.white600};

    font-size: 1.5rem;
    font-weight: 600;
    `};

    ${props => props.variant === 'primary' && css`
        color: ${Themes.colors.blue900};
        background-color: ${Themes.colors.white600};
    `};

    @media (max-width: ${Themes.breakPoints.mediumMobile}) {
        font-size: 1rem;
    }


`