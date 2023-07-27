import styled from "styled-components";
import { Themes } from '@/styles/themes'

export const Layer = styled.div`
width: 100vw;
height: 100vh;
background: red;
`;

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

    @media (max-width: ${Themes.breakPoints.notebook}) {
        padding: 0 2rem;
    }

    @media (max-width: ${Themes.breakPoints.ipad}) {
        padding: 0 1.2rem;
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: inherit;
`

export const Profile = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90vh;
    width: inherit;

    @media (max-width: ${Themes.breakPoints.ipadPro}) {
        flex-direction: column-reverse;
        margin-top: 5rem;
    }
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
        color: ${Themes.colors.white600};
    }

    span:first-of-type {
        margin-top: 1rem;
    }

    span {
        font-size: 1.25rem;
        font-weight: 700;
        color: ${Themes.colors.gray300};
    }

    
    @media (max-width: ${Themes.breakPoints.ipadPro}) {
        margin-top: 2.5rem;
        justify-content: flex-start;

        h1 {
            font-size: 3rem;
        }
    }

    @media (max-width: ${Themes.breakPoints.mediumMobile}) {

        h1 {
            font-size: 2rem;
        }

        span {
            font-size: 0.85rem;
        }
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

    @media (max-width: ${Themes.breakPoints.ipadPro}) {
        img {
            height: 20rem;
            width: 20rem;
        }
    }

    @media (max-width: ${Themes.breakPoints.mediumMobile}) {
        img {
            height: 16rem;
            width: 16rem;
        }
    }
`;

export const ExperiencesContainer = styled.div`
    padding-top: 1rem;
    margin-top: 12rem;

    
    @media (max-width: ${Themes.breakPoints.mobile}) {
        margin-top: 6rem;
    }
`

export const PostsContainer = styled.div`
    width: inherit;
    margin-top: 12rem;
    padding-top: 1rem;
    
    @media (max-width: ${Themes.breakPoints.mobile}) {
        margin-top: 6rem;
    }
`

export const Post = styled.a`
    cursor: pointer;
    transition: all 0.25s;
    color: ${Themes.colors.white300};
    text-decoration: none;
    
    h5 {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 0.25rem;
    }

    h5:nth-of-type(n + 1) {
        margin-top: 2rem;
    }

    h5:hover {
        filter: brightness(80%);
    }

    > span {
        font-size: 1rem;
        font-weight: 400;
    }

    
    @media (max-width: ${Themes.breakPoints.mobile}) {
        h5 {
            font-size: 1.5rem;
        }

        h5:nth-of-type(n + 1) {
            margin-top: 1rem;
        }

        span {
            font-size: 1rem;
        }
    }
`

export const AboutMe = styled.div`
    margin-top: 12rem;
    padding-top: 1rem;

    h3 {
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 2rem;
    }

    p {
        font-size: 1.5rem;
        padding-bottom: 2rem;
    }

    @media (max-width: ${Themes.breakPoints.mobile}) {

        h3 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 1.5rem;
        }

        p {
            font-size: 1rem;
            padding-bottom: 1rem;
        }

        margin-top: 6rem;
    }
`

export const ContactContainer = styled.footer`
    margin-top: 12rem;
    display: flex;
    flex-direction: column;
    width: inherit;

    @media (max-width: ${Themes.breakPoints.mobile}) {
        margin-top: 6rem;
    }
`