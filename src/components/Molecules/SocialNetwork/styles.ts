import { Themes } from "@/styles/themes";
import { styled } from "styled-components";

export const Container = styled.a`
        gap: 0.25rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-decoration: none;

    span {
        font-weight: 600;
        font-size: 1.25rem;
        color: ${Themes.colors.white300};
        text-align: center;
    }

    p {
        font-size: 0.85rem;
        font-weight: 400;
        color: ${Themes.colors.white300};
    }
`