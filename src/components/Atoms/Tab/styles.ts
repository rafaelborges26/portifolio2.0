import { Themes } from "@/styles/themes";
import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    padding: 0.5rem 0;
    background: transparent;
    border: none;
    font-size: 2rem;
    font-weight: 600;
    margin: 0.5rem 0;
    color: ${Themes.colors.black};

    cursor: pointer;

    @media (max-width: ${Themes.breakPoints.mobile}) {
        font-size: 1.5rem;
    }

    @media (max-width: ${Themes.breakPoints.mediumMobile}) {
        font-size: 1rem;
    }
`