import { styled } from "styled-components";

export const StyledLoginContainer = styled.main`
    .header{
        display: flex;
        padding: 3.81rem 3.81rem 1rem;
        position: relative;

        img{
            width: 172px;
            cursor: pointer;
        }

        div{
            padding: 5rem 9rem 2rem;
            position: absolute;
            top: 0;
            left: 50%;
            translate: -50% 0;
            border-radius: 0 0 12px 12px;
            background-color: ${({theme}) => theme.color.jet};

            .title{
                color: ${({theme}) => theme.color.white};
            }
        }
    }

    form{
        width: 35%;
        margin: 5.4rem auto 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2.3rem;

        input{
            width: 100%;
            border-radius: 12px;
            padding: 2rem 1.7rem;
            background-color: ${({theme}) => theme.color.alabaster};
            font-size: 1.3rem;
            border: none;
        }

        strong{
            cursor: pointer;
        }
    }
`