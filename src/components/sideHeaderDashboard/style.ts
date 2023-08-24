import { styled } from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
    width: 23.75rem;
    background-color: ${({theme}) => theme.color.alabaster};
    gap: 2rem;
    padding: 3rem;

    img{
        width: 20.43rem;
        max-width: 100%;      
    }

    div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: left;
        gap: 2rem;
    }

    .navlink {
        color: ${({ theme }) => theme.color.jet};
        font-size: 24px;
        font-weight: 700;
        cursor: pointer;
    }

`