import styled from "styled-components";

export const StyledModalReceitaContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.65);
  position: absolute;
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  position: fixed;
`;

export const StyledModalContainer = styled.div`
  width: 41rem;
  max-width: 95vw;
  height: 41rem;
  max-height: 95vh;
  border-radius: 32px;
  background-color: ${({ theme }) => theme.color.alabaster};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 481px) and (max-width: 760px) {
    max-width: 70%;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 83%;

    .close-modal {
      cursor: pointer;
    }

    h3 {
      font-size: 1.75rem;
      font-weight: 700;
      margin-left: 6rem;

      @media (max-width: 480px) {
        margin-left: 0;
      }
    }

    span {
      font-size: 3rem;
      font-weight: 700;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    width: 83%;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;

    button {
      margin-top: 3rem;
    }

    input,
    select {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60px;
      width: 100%;
      font-size: 1.5rem;
      border-radius: 12px;
      background-color: ${({ theme }) => theme.color.white};
      font-weight: 500;
      color: ${({ theme }) => theme.color.jet};
      padding: 0 1.5rem;

      @media (max-width: 760px) {
        font-size: 1rem;
        padding: 0 1rem;
      }
    }

    .opt {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      max-width: 10px !important;
      font-size: 1rem;
      border-radius: 1rem;
    }
  }
`;
