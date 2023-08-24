import styled, { css } from "styled-components";

interface iStyledDashboardThemeProps {
    themecolor: "receitas" | "despesas" | "investimentos";
}

export const StyledDashboardLabel = styled.div<iStyledDashboardThemeProps>`
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

    ${({ themecolor }) => {
        switch (themecolor) {
            case "receitas":
                return css`
                background-color: ${({ theme }) => theme.color.green};
                `
            case "despesas":
                return css`
                background-color: ${({ theme }) => theme.color.red};
                `
            case "investimentos":
                return css`
                background-color: ${({ theme }) => theme.color.blue};
                `
        }
    }}

`;