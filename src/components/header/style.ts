import { styled } from "styled-components";

export const StyledHeader = styled.header`

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    height: 14.6rem;
    width: 100vw;
    background-color: ${({theme}) => theme.color.alabaster};

    img{
        width: 20.43rem;
        height: 11.06rem;
        margin-left:4.3rem;        
    }

    div {
        display: flex;
        align-items: center;
        margin-right:6.62rem;
        gap: 1.81rem;   

        .btn {
            height: 4.375rem;
        }

    }

`
