import styled from "styled-components";

export const HeroContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3rem;

    .hero-img-div {
        width: 34.375rem;
        height: 28.75rem;
        display: flex;
        justify-content: center;
    }

    .hero-text {
        width: 34.375rem;
        height: 28.75rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .styled-tag {
        font-size: 24px;
        font-weight: 500;
        text-align: justify;
    }

    .hero-btn {
        all: unset;
        width: 100%;
        height: 4.375rem;
        background-color: ${({theme}) => theme.color.brownSugar};
        color: ${({theme}) => theme.color.white};
        font-size: 28px;
        border-radius: 12px;
        text-align: center;
        cursor: pointer;


    }
`;