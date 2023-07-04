import styled from "styled-components";
import { Themes } from '@/styles/themes'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;

    width: 100%;
    padding: 0 8rem;

`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: inherit;
`

export const ButtonHeader = styled.button`
    background: transparent;
    border: none;
    color: ${Themes.colors.white};

    font-size: 1.5rem;
    font-weight: 600;
`

export const Profile = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40rem;
    width: inherit;
    
    
    h1 {
        font-size: 4rem;
        color: ${Themes.colors.white};
        flex: 0.7;
    }
`

export const ImageContainer = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        height: 200px;
        width: 200px;
        border-radius: 50%;
    }
`;