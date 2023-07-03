import styled from "styled-components";
import { Themes } from '@/styles/themes'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;

    color: ${Themes.colors.white};
`;