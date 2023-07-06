import styled, { css } from 'styled-components'
import { Themes } from '@/styles/themes'
import { ILabelStyles } from './interfaces'

export const Container = styled.span<ILabelStyles>`
    padding: 0.25rem;
    border-radius: 0.5rem;
    font-size: 0.75rem;

    ${props => props.colorSelected === 'blue' && css`
        color: ${Themes.colors.white};
        background-color: ${Themes.colors.blue900};
    `};

    ${props => props.colorSelected === 'white' && css`
        color: ${Themes.colors.blue900};
        background-color: ${Themes.colors.white};
    `};
`