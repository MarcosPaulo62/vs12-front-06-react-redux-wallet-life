import { styled } from "styled-components";

export const DifferentialsContainer = styled.div`
  width: 74rem;
  max-width: 90%;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  margin: auto;

  .left-side {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5rem;

    @media screen and (max-width: 640px) {
      margin: 0 auto;
    }
  }

  .numbers-grid {
    width: 34.375rem;
    height: 28.75rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;
  }

  .grid-item {
    background-color: ${({ theme }) => theme.color.white};
    width: 16rem;
    height: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .number {
    font-size: 5rem;
  }

  .div-btn {
    width: 100%;
  }

  .styled-btn {
    max-width: 100vw;
  }

  .styled-span {
    text-align: center;
    font-size: 28px;
    font-weight: 500;
  }

  .img-cafe {
    width: 30rem;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .img-cafe-img {
    max-height: 100%;
    margin: auto;
  }

  @media screen and (max-width: 640px) {
    width: 90%;

    .numbers-grid {
      width: 100vw;
      height: fit-content;
      justify-content: center;
      align-items: center;
      grid-template-columns: repeat(1, 1fr);
      margin: auto;
    }

    .grid-item {
      width: 100%;
      justify-content: center;
    }

    .div-btn {
      width: 90%;
    }

    .styled-btn {
      max-width: 90vw;
    }
  }
`;
