import styled from 'styled-components'
import { Themes } from '@/styles/themes'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    max-width: 20rem;
    border-radius: 2rem;
    background: ${Themes.colors.black};
    color: ${Themes.colors.white};
`

export const Title = styled.h6`
    font-size: 1.25rem;
    margin: 2rem 0;
`

export const Description = styled.p`
    font-size: 1rem;
    margin-bottom: 2rem;
`

export const ContainerLabel = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
`