import { styled } from "styled-components";

export const StyledLoginContainer = styled.main`
    .header{
        width: 100vw;
        display: flex;
        padding: 3.81rem;
        position: relative;

        img{
            width: 172px;
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
`