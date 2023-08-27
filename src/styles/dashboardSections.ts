import styled, { css } from "styled-components";
import Lupa from "../../src/assets/dashboard-lupa.png";
import Eye from "../../src/assets/dashboard-olho.png";
import TrashCan from "../../src/assets/dashboard-lixo.png";

export interface iStyledDashboardThemeProps {
  themecolor: "receitas" | "despesas" | "investimentos" | "currentPage";
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

  @media (max-width: 481px) {
    height: 3rem;
  }

  @media (min-width: 482px) and (max-width: 760px) {
    height: 5rem;
  }

  .styled-title {
    @media (max-width: 481px) {
      font-size: 1.5rem;
    }
  }
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

  @media (max-width: 480px) {
    max-width: 90%;
    height: 6rem;
  }

  @media (min-width: 481px) and (max-width: 760px) {
    max-width: 90%;
    height: 7rem;
  }
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

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }

  @media (min-width: 481px) and (max-width: 760px) {
    font-size: 1.4rem;
  }
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

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }

  @media (min-width: 481px) and (max-width: 760px) {
    font-size: 1.4rem;
  }
`;

export const StyledPlusButton = styled.button`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.white};
  font-size: 5rem;

  @media (max-width: 481px) {
    font-size: 3rem;
  }

  @media (min-width: 481px) and (max-width: 760px) {
    font-size: 4rem;
  }
`;

export const StyledInputAndButtonDiv = styled.div`
  width: 50%;
  height: 5rem;

  @media (max-width: 480px) {
    width: 80%;
    height: 2rem;
  }

  @media (min-width: 481px) and (max-width: 760px) {
    width: 80%;
    height: 3.5rem;
  }

  @media (min-width: 761px) and (max-width: 1024px) {
    width: 70%;
    height: 4.5rem;
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
    width: 60%;
  }
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

  @media (max-width: 481px) {
    z-index: -1;
    font-size: 1rem;
  }

  @media (min-width: 481px) and (max-width: 760px) {
    z-index: -1;
    font-size: 1.3rem;
  }

  @media (min-width: 761px) and (max-width: 1024px) {
    z-index: -1;
    font-size: 1.4rem;
  }
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

  @media (max-width: 480px) {
    z-index: -1;
    width: 2rem;
    height: 2rem;
    margin-left: -2rem;
    background-size: 1.3rem 1.3rem;
  }

  @media (min-width: 481px) and (max-width: 760px) {
    z-index: -1;
    width: 3.5rem;
    height: 3.5rem;
    margin-left: -3.5rem;
  }

  @media (min-width: 761px) and (max-width: 1024px) {
    z-index: -1;
    width: 4.5rem;
    height: 4.5rem;
    margin-left: -4.5rem;
  }
`;

export const StyledItemlDiv = styled.div`
  width: 50rem;
  max-width: 100%;
  height: 6rem;
  min-height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 32px 32px 32px 32px;
  background-color: ${({ theme }) => theme.color.alabaster};

  @media (max-width: 460px) {
    height: 4.5rem;
  }
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

  @media (max-width: 760px) {
    font-size: 1.5rem;
  }

  @media (max-width: 481px) {
    text-align: center;
    max-width: 30%;
    font-size: 1rem;
  }
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

  @media (max-width: 760px) {
    font-size: 1.5rem;
  }

  @media (max-width: 481px) {
    width: 55%;
    font-size: .9rem;
    padding-left: .3rem;
    text-justify: center;
  }
`;

export const StyledEyeButton = styled.button`
  width: 50px;
  height: 100%;
  background: url(${Eye});
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 1rem;

  @media (max-width: 481px) {
    background-size: 30px 20px;
    margin: 0 .5rem;
  }
`;

export const StyledTrashCanButton = styled.button`
  width: 50px;
  height: 100%;
  background: url(${TrashCan});
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 1rem;

  @media (max-width: 481px) {
    background-size: 25px 30px;
    margin-right: .7rem;
  }
`;
