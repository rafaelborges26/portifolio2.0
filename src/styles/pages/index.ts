import styled from "styled-components";
import { Themes } from '@/styles/themes'

export const Container = styled.div`
    max-width: 1700px;
    margin: auto;
    height: 100%;
`

export const Content = styled.div`
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
    height: 44rem;
    width: inherit;
`


export const DescriptionContainer = styled.div`
    flex: 0.7;
    height: inherit;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    
    h1 {
        font-size: 4rem;
        color: ${Themes.colors.white};
    }

    span:first-of-type {
        margin-top: 1rem;
    }

    span {
        font-size: 1.25rem;
        font-weight: 700;
        color: ${Themes.colors.gray};
    }
`

export const ImageContainer = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    img {
        height: 15.625rem;
        width: 15.625rem;
        border-radius: 50%;
    }
`;

export const ExperiencesContainer = styled.div``

export const AboutMe = styled.div`
    margin-top: 12rem;

    h3 {
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 2rem;
    }

    p {
        font-size: 1.5rem;
        padding-bottom: 2rem;
    }
`