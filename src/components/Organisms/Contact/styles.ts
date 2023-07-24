import { Themes } from "@/styles/themes";
import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 2.5rem;

    background: ${Themes.colors.gray600};
    border-radius: 2rem;
    padding: 2rem;
`