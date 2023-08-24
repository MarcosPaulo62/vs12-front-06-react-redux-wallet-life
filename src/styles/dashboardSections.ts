import styled, { css } from "styled-components";
import Lupa from "../../src/assets/dashboard-lupa.png";
import Eye from "../../src/assets/dashboard-olho.png";
import TrashCan from "../../src/assets/dashboard-lixo.png";

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
  border-radius: 0px 0px 32px 32px;

  position: sticky;
  top: 0;

  ${({ themecolor }) => {
    switch (themecolor) {
      case "receitas":
        return css`
          background-color: ${({ theme }) => theme.color.green};
        `;
      case "despesas":
        return css`
          background-color: ${({ theme }) => theme.color.red};
        `;
      case "investimentos":
        return css`
          background-color: ${({ theme }) => theme.color.blue};
        `;
    }
  }}
`;

export const StyledTotalDiv = styled.div<iStyledDashboardThemeProps>`
  width: 50rem;
  max-width: 80%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  border-radius: 32px 32px 32px 32px;

  ${({ themecolor }) => {
    switch (themecolor) {
      case "receitas":
        return css`
          background-color: ${({ theme }) => theme.color.green};
        `;
      case "despesas":
        return css`
          background-color: ${({ theme }) => theme.color.red};
        `;
      case "investimentos":
        return css`
          background-color: ${({ theme }) => theme.color.blue};
        `;
    }
  }}
`;

export const StyledTotalTitle = styled.span`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.color.jet};
  border-radius: 32px 32px 0 0;
  padding: 0 2rem;
  font-size: 1.75rem;
  font-weight: 700;
`;

export const StyledTotalValueAndPlusButton = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color.jet};
  color: ${({ theme }) => theme.color.white};
  border-radius: 0 0 32px 32px;
  padding: 0 2rem;
`;

export const StyledTotalValue = styled.p`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  color: ${({ theme }) => theme.color.white};
  font-size: 2rem;
  font-weight: 700;
`;

export const StyledPlusButton = styled.button`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.white};
  font-size: 5rem;
`;

export const StyledInputAndButtonDiv = styled.div`
  width: 50%;
  height: 5rem;
`;

export const StyledDashboardInput = styled.input`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.alabaster};
  color: ${({ theme }) => theme.color.khaki};
  border-radius: 12px;
  border: none;
  font-size: 1.5rem;
  padding-left: 1.5rem;
  position: relative;
`;

export const StyledDashboardSearchButton = styled.button`
    width: 100px;
    height: 80px;
    background: url(${Lupa});
    background-repeat: no-repeat;
    background-color: ${({ theme }) => theme.color.jet};
    border-radius: 12px;
    background-position: center;
    margin-left: -100px;
    position: absolute;
`;

export const StyledItemlDiv = styled.div`
  width: 50rem;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 32px 32px 32px 32px;
  background-color: ${({ theme }) => theme.color.alabaster};
`;

export const StyledItemValue = styled.p<iStyledDashboardThemeProps>`
width: 15rem;
height: 100%;
border-radius: 36px 0 0 36px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 2rem;
font-weight: 700;

${({ themecolor }) => {
    switch (themecolor) {
      case "receitas":
        return css`
          background-color: ${({ theme }) => theme.color.green};
        `;
      case "despesas":
        return css`
          background-color: ${({ theme }) => theme.color.red};
        `;
      case "investimentos":
        return css`
          background-color: ${({ theme }) => theme.color.blue};
        `;
    }
  }}
`;

export const StyledItemDescription = styled.p`
  width: 60%;
  height: 100%;
  color: ${({ theme }) => theme.color.jet};
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding-left: 1.5rem;
`;

export const StyledEyeButton = styled.button`
    width: 50px;
    height: 100%;
    background: url(${Eye});
    background-repeat: no-repeat;
    background-position: center;
    margin-right: 1rem;
`;

export const StyledTrashCanButton = styled.button`
    width: 50px;
    height: 100%;
    background: url(${TrashCan});
    background-repeat: no-repeat;
    background-position: center;
    margin-right: 1rem;
`;


