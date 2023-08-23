import { styled } from "styled-components";

export const StyledHeader = styled.header`

    display: flex;
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
            border-radius: 0.75rem;
            height: 4.375rem;
            background-color: ${({theme}) => theme.color.brownSugar};
            color: ${({theme}) => theme.color.white};
            font-size: 1.75rem;
            font-weight: 700;
            margin: 1.75rem 0;
        }

        .btn-cadastro {
            width:13.81rem;
        }

        .btn-login {
            width: 10.3rem;
        }

    }

`
