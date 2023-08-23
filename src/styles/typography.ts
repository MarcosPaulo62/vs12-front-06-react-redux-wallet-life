import styled, { css } from "styled-components";
import BaseTitle from "../components/typography/Typography";

export const StyledTitle = styled(BaseTitle)`
  font-family: "Quicksand", sans-serif;
  font-weight: ${({ fontWeight }) => fontWeight};

  color: ${({ theme }) => theme.color.black};

  ${({ fontSize }) => {
    switch (fontSize) {
      case "lg":
        return css`
          font-size: 2rem;
        `;
      case "md":
        return css`
          font-size: 1.25rem;
        `;
      case "sm":
        return css`
          font-size: 1rem;
        `;
    }
  }}
`;

interface iStyledSpan {
  opacity?: number;
  fontSize: "lg" | "md" | "sm";
}
export const StyledSpan = styled.span<iStyledSpan>`
  font-family: "Quicksand", sans-serif;
  font-weight: 400;
  strong,
  b {
    font-weight: 700;
  }
  color: ${({ theme }) => theme.color.black};

  ${({ fontSize }) => {
    switch (fontSize) {
      case "lg":
        return css`
          font-size: 1.25rem;
        `;
      case "md":
        return css`
          font-size: 1rem;
        `;
      case "sm":
        return css`
          font-size: 0.9rem;
        `;
    }
  }}
`;

export const StyledTag = styled.p`
  font-family: "Quicksand", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  display: inline-flex;
  text-align: center;
  line-height: 2.5rem;
  color: ${({ theme }) => theme.color.black};
`;
