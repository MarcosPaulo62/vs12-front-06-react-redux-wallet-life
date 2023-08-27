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
  }

  .itens-paginacao ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (max-width: 760px) {
    width: 100%;
  }
`;
