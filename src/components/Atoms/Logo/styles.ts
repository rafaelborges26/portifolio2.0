import styled from 'styled-components'
import { Themes } from '@/styles/themes'

export const Container = styled.div`
    height: 8rem;
    width: 8rem;

    display: flex;
    align-items: center;
    justify-content: center;
    //background: ${Themes.colors.blue900};
    background: red;
    border-radius: 2rem;

    img {
        width: 3.5rem;
        height: 3.5rem;
    }
`