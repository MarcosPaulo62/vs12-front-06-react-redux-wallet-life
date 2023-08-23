import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 74rem;
  max-width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  margin: auto;

  .hero-img-div {
    width: 34.375rem;
    height: 28.75rem;
    display: flex;
    justify-content: center;
  }

  .hero-text {
    width: 34.375rem;
    height: 28.75rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .styled-tag {
    font-size: 24px;
    font-weight: 500;
    text-align: justify;
  }

  .styled-btn {
    max-width: 100%;
  }

  @media screen and (max-width: 640px) {
    .hero-img-div {
      width: 90%;
      height: fit-content;
    }

    .hero-img {
      width: 100%;
    }

    .hero-text {
      width: 90%;
    }

    .styled-btn {
      padding: 1rem;
    }
  }
`;
