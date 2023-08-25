import { styled } from "styled-components";

export const StyledLoginContainer = styled.main`
  display: flex;
  flex-direction: column;

  .header {
    display: flex;
    padding: 3.81rem 3.81rem 1rem;
    position: relative;
    width: 100%;

    img {
      width: 172px;
      cursor: pointer;

      @media (min-width: 1920px) {
        width: 220px;
      }

      @media (min-width: 768px) and (max-width: 1200px) {
        width: 125px;
        margin-left: -20px;
      }

      @media (min-width: 300px) and (max-width: 767px) {
        width: 110px;
        margin-left: -50px;
        margin-top: -30px;
      }
    }

    div {
      width: 420px;
      padding: 5rem 0 2rem;
      display: flex;
      justify-content: center;
      position: absolute;
      top: 0;
      left: 50%;
      translate: -50% 0;
      border-radius: 0 0 12px 12px;
      background-color: ${({ theme }) => theme.color.jet};

      @media (min-width: 1920px) {
        width: 550px;
      }

      @media (min-width: 300px) and (max-width: 767px) {
        width: 160px;
        height: 90px;
      }

      .title {
        color: ${({ theme }) => theme.color.white};

        @media (min-width: 300px) and (max-width: 768px) {
          font-size: 1.1rem;
        }
      }
    }
  }

  form {
    width: 35%;
    margin: 5.4rem auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.3rem;

    @media (min-width: 640px) and (max-width: 1200px) {
      width: 60%;
    }

    @media screen and (max-width: 640px) {
      width: 80%;
    }

    button {
      @media (min-width: 300px) and (max-width: 767px) {
        width: 160px;
        font-size: 1.5rem;
      }
    }

    input {
      width: 100%;
      border-radius: 12px;
      padding: 2rem 1.7rem;
      background-color: ${({ theme }) => theme.color.alabaster};
      font-size: 1.3rem;
      border: none;

      @media (min-width: 300px) and (max-width: 767px) {
        font-size: 1rem;
        padding: 2rem .8rem;
      }

      span {
        @media (min-width: 300px) and (max-width: 767px) {
          font-size: 1rem;
          width: 150px;
        }
      }
    }

    strong {
      cursor: pointer;
    }
  }
`;
