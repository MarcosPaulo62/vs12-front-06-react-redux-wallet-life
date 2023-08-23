import styled, { css } from "styled-components";

interface iStyledbuttonProps {
  buttonsize: "sm" | "mdlp" | "mdlc" | "lg";
  buttonstyle: "landingPage" | "signinSignout";
}

export const StyledButton = styled.button<iStyledbuttonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  font-weight: 700;
  transition: 0.4s;
  border-radius: 0.75rem;
  color: ${({theme}) => theme.color.white};
  

  ${({ buttonsize }) => {
    switch (buttonsize) {
      case "lg":
        return css`
          width: 35.8rem;
          height: 5.6rem;
        `;
      case "mdlp":
        return css`
          width: 13.8rem;
          height: 4.375rem;
        `;
      case "mdlc":
        return css`
          width: 18.4rem;
          height: 5rem;
        `;  
      case "sm":
        return css`
          width: 10.75rem;
          height: 5rem;
        `;
    }
  }}

  
  ${({ buttonstyle, theme }) => {
    switch (buttonstyle) {
      case "landingPage":
        return css`
          background: ${theme.color.brownSugar};
        `;
      case "signinSignout":
        return css`
          background-color: ${theme.color.jet};
          
        `;
    }
  }}



    &:hover {
    filter: brightness(1.1);
    box-shadow: 0px 4px 25px rgba(255, 249, 249, 0.25);
  }
`;

