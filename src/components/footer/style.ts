import { styled } from "styled-components";

export const StyledFooterContainer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  height: fit-content;
  padding: 4rem 1rem;
  background-color: ${({ theme }) => theme.color.alabaster};
  gap: 3rem;
  /* padding-inline: 50px; */

  img {
    width: 17.1rem;
    height: 9.25rem;
    margin-top: 2.9rem;
    margin-left: 2.5rem;
  }

  .left-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.color.black};
      font-weight: 700;
      align-self: flex-start;
      font-size: 1.75rem;
      line-height: 2.5rem;
      margin-left: 3.75rem;
    }

    .login {
      margin-top: 1.7rem;
      margin-bottom: 3.5rem;
    }
  }

  .right-section {
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-self: end;
    gap: 2.9rem;
  }

  .paragraphy {
    font-size: 1.5rem;
    font-weight: 600;
    text-align: start;
    width: 42.5rem;
    max-width: 80vw;
  }

  .input-and-btn {
    display: flex;
    flex-wrap: wrap;
  }

  .styled-input {
    display: flex;
    flex-wrap: wrap;
    gap: 2.1rem;
  }

  .input {
    width: 29.3rem;
    padding-left: 1.7rem;
    border-radius: 0.75rem;
    font-size: 1.5rem;
    font-weight: 400;
    border: none;
  }

  .input-error {
    border: 1px solid red;
  }

  @media screen and (max-width: 640px) {
    padding: 1rem;

    .right-section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: auto;

      .input {
        width: 90%;
        padding-left: 0;
      }

      .styled-input {
        justify-content: center;
      }
    }
  }
`;
