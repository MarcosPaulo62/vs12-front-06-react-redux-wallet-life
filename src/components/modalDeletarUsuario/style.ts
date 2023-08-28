import styled from "styled-components";

export const StyledModalConfirmDeleteContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.65);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  div {
    width: 41.3125rem;
    height: 28.3125rem;
    border-radius: 2rem;
    background-color: ${({ theme }) => theme.color.alabaster};
    display: flex;
    align-items: center;
    flex-direction: column;

    @media (max-width: 700px) {
      width: 30rem;
      height: 31rem;
    }

    @media (max-width: 500px) {
      width: 20rem;
      height: 25rem;
    }

    h3 {
      color: ${({ theme }) => theme.color.black};
      text-align: center;
      font-size: 1.75rem;
      font-weight: 700;
      line-height: 2.5rem;
      margin-top: 4.25rem;

      @media (max-width: 500px) {
        font-size: 1.25rem;
        margin-top: 2rem;
      }
    }

    p {
      color: ${({ theme }) => theme.color.black};
      text-align: center;
      width: 25.61288rem;
      height: 12.5625rem;
      font-size: 1.6rem;
      font-weight: 700;
      line-height: 2.5rem;
      padding: 0.5rem;
      margin-top: 2rem;
      margin-bottom: 2rem;

      @media (max-width: 700px) {
        width: 30rem;
      }

      @media (max-width: 500px) {
        width: 20rem;
        font-size: 1rem;
        margin-top: 1rem;
      }
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1.25rem;

      @media (max-width: 500px) {
        gap: 0rem;
      }

      button {
        @media (max-width: 500px) {
          font-size: 1rem;
          width: 10rem;
          height: 3rem;
        }
      }

      .btn-delete {
        width: 19.9375rem;
        background-color: #840000;

        @media (max-width: 500px) {
          font-size: 0.8rem;
          width: 12rem;
        }

        img {
          margin-left: 0.5rem;

          @media (max-width: 500px) {
            margin-left: 0.2rem;
          }
        }
      }
    }
  }
`;
