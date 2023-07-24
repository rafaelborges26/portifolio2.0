import { styled } from "styled-components";

export const Container = styled.div`
    gap: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    span {
        font-weight: 600;
        font-size: 1.25rem;
    }

    p {
        font-size: 1rem;
        font-weight: 400;
    }
`