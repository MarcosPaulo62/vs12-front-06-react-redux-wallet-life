import { styled } from "styled-components";

export const ContainerContatoLp = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.jet};
  width: 74rem;
  max-width: 90%;
  border-radius: 32px;
  margin: auto;
  padding: 45px 0;
  box-sizing: border-box;
  height: fit-content;
  gap: 3rem;

  .styled-title {
    width: 35%;
    min-width: 20rem;
    color: ${({ theme }) => theme.color.white};
  }

  .styled-title-fale-conosco {
    font-weight: bold;
    font-size: 44px;
  }
`;

export const FormContatoLP = styled.form`
  width: 30rem;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  background-color: ${({ theme }) => theme.color.white};
  /* padding-block: 40px; */
  border-radius: 32px;
  margin-right: -30px;
  gap: 20px;

  .divForm {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .input {
    width: 80%;
    padding: 15px;
    height: 60px;
    border-radius: 12px;
    border: none;
    font-size: 24px;
    background-color: ${({ theme }) => theme.color.alabaster};
  }

  .input-error {
    border: 1px solid red;
  }

  .textarea {
    width: 80%;
    padding: 15px;
    height: 120px;
    border-radius: 12px;
    border: none;
    font-size: 24px;
    background-color: ${({ theme }) => theme.color.alabaster};
  }
  @media screen and (max-width: 640px) {
    width: 95%;
    padding: 2rem 0;
    margin: auto;

    .divForm {
      width: 80%;
    }
  }
`;
