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

        @media (max-width: ${Themes.breakPoints.ipad}) {

            width: 4rem;
            height: 4rem;

            img {
                width: 2rem;
                height: 2rem;
            }
        }

        @media (max-width: ${Themes.breakPoints.mobile}) {

            width: 3rem;
            height: 3rem;

            img {
                width: 1.75rem;
                height: 1.75rem;
            }
        }
    `};
`