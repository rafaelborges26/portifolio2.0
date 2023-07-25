import styled from 'styled-components'
import { Themes } from '@/styles/themes'

export const Container = styled.a`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        max-width: 20rem;
        height: 30rem;
        border-radius: 2rem;
        background: ${Themes.colors.black};
        color: ${Themes.colors.white600};
        cursor: pointer;
        text-decoration: none;

`

export const Title = styled.h6`
    font-size: 1.25rem;
    margin: 2rem 0;
`

export const Description = styled.p`
    font-size: 1rem;
    text-align: center;
`

export const ContainerLabel = styled.div`
    margin-top:  auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
`