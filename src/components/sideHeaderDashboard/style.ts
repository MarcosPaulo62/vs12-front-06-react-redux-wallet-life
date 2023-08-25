import { styled } from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
    width: 30%;
    min-width: 250px;
    background-color: ${({theme}) => theme.color.alabaster};
    gap: 2rem;
    padding: 3rem;
    position: sticky;
    top: 0;

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
        font-size: 1.5rem;
        font-weight: 700;
        cursor: pointer;
    }

    @media (max-width: 760px){
        position: relative;
        width: 100%;
        height: 250px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        div {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: end;
            gap: .3rem;
        }
    }

    @media (max-width: 480px){
        .navlink{
            font-size: 1.1rem;
        }
    }

`