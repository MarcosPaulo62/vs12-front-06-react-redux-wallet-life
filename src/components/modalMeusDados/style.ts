import styled from "styled-components";

export const StyledModalMeusDadosContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.65);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  position: fixed;
`;

export const StyledModalContainer = styled.div`
  max-width: 660px;
  width: 90%;
  height: 90%;
  border-radius: 32px;
  background-color: ${({ theme }) => theme.color.alabaster};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;

    .close-modal, .pencil {
      cursor: pointer;      
    }

    h3 {      
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
    width: 85%;
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

    .buttons{
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      button{
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        font-size: 24px;
        font-weight: 700;
        border-radius: 12px;
        width: 280px;
        padding: 0.5rem 0;
        color: ${({ theme }) => theme.color.white};
        background-color:  ${({ theme }) => theme.color.brownSugar};
      }

      .delete{
        background-color: #840000;
      }
    }
    
  }

  @media (max-width: 600px) {
    div {
      width: 95%;

      h3 {      
        font-size: 1.5rem;
        font-weight: 700;
      }

      span, .pencil {
        font-size: 1.5rem;     
      }
    }

    form{
      input,
      select{
        font-size: 1rem;
      }
      .buttons button{
        font-size: 1.5rem;
      }
    }
  }

  @media (max-width: 400px) {
    div {
      width: 95%;

      h3 {      
        font-size: 1.2rem;
        font-weight: 700;
      }

      span, .pencil {
        font-size: 1.5rem;     
      }
    }

    form{
      input,
      select{
        font-size: 1rem;
      }
      .buttons button{
        font-size: 1.3rem;
        width: 100%;
      }
    }
  }
`;
