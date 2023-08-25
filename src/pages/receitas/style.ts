import { styled } from "styled-components";

export const DashboardContainer = styled.div`
    width: 50rem;
    max-width: 80%;
    height: 12rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.color.alabaster};
    border-radius: 0px 0px 32px 32px;

    position: sticky;
    top: 0;

`