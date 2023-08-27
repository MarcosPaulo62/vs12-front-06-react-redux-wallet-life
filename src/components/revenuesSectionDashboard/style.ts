import styled from "styled-components";

export const StyledSectionDashboard = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  gap: 2rem;

  .itens-paginacao {
    margin-top: 1rem;
    max-width: 95%;

    @media (max-width: 480px) {
      margin-top: 0.2rem;
    }
  }

  .itens-paginacao ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .paginacao {
    margin-bottom: 3rem;
    z-index: -1;
  }

  @media (max-width: 760px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }

  @media (min-width: 481px) and (max-width: 760px) {
    gap: 1.3rem;
  }

  @media (min-width: 761px) and (max-width: 1024px) {
    gap: 1.5rem;
  }
`;
