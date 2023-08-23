import styled from "styled-components";

export const ServicesContainer = styled.div`
  width: 74rem;
  max-width: 90%;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;

  background-color: ${({ theme }) => theme.color.jet};
  border-radius: 32px;
  margin: auto;
  padding: 3rem;

  .services-text {
    width: 30rem;
    height: 28.75rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .styled-title {
    color: ${({ theme }) => theme.color.white};
  }

  .styled-tag {
    font-size: 24px;
    font-weight: 500;
    text-align: justify;

    color: ${({ theme }) => theme.color.white};
    line-height: 1.8rem;
  }

  .services-grid {
    width: 34.375rem;
    height: 28.75rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;
  }

  .grid-item {
    background-color: ${({ theme }) => theme.color.white};
    width: 15.625;
    height: 12.25;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
  }

  .circle {
    width: 90px;
    height: 90px;
    background-color: ${({ theme }) => theme.color.alabaster};
    padding: 1.5rem;
    border-radius: 50%;
  }

  .styled-span {
    text-align: center;
    font-size: 22px;
    font-weight: 500;
  }

  @media screen and (max-width: 640px) {
    width: 90%;

    .services-grid {
      height: fit-content;
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
