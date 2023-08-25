import styled from "styled-components";

export const StyledModalDespesaContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.65);
  position: absolute;
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const StyledModalContainer = styled.div`
  width: 660px;
  height: 660px;
  border-radius: 32px;
  background-color: ${({ theme }) => theme.color.alabaster};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  div {
    display: flex;
    align-items: center;

    h3 {
      margin-right: 8rem;
      font-size: 1.75rem;
      font-weight: 700;
    }

    span {
      font-size: 3rem;
      font-weight: 700;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    width: 520px;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;

    button {
      margin-top: 3rem;
    }

    input,
    select {
      all: unset;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60px;
      width: 100%;
      font-size: 24px;
      border-radius: 12px;
      background-color: ${({ theme }) => theme.color.white};
      font-weight: 500;
      color: ${({ theme }) => theme.color.jet};
      padding: 0 1.5rem;
    }

    .opt {
      overflow: hidden;
      white-space: nowrap ; 
      text-overflow: ellipsis;
      max-width: 10px !important;
      font-size: 1rem;
      border-radius: 1rem;

    }

    
  }
`;
