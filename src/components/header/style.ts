import { styled } from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 14.6rem;
  width: 100vw;
  background-color: ${({ theme }) => theme.color.alabaster};

  img {
    width: 20.43rem;
    height: 11.06rem;
    margin-left: 4.3rem;
  }

  .btns-div {
    display: flex;
    flex-wrap: wrap;
  }

  div {
    display: flex;
    align-items: center;
    margin-right: 6.62rem;
    gap: 1.81rem;

    .btn {
      height: 4.375rem;
    }
  }

  @media screen and (max-width: 1000px) {
    height: 20rem;

    img {
      max-width: 90vw;
      height: 11.06rem;
      margin-left: 4.3rem;
    }
  }

  @media screen and (max-width: 1000px) {
    height: 25rem;
    justify-content: center;
    align-items: center;

    .btns-div {
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    img {
      max-width: 100%;
      height: 11.06rem;
      margin: 0;
    }
  }
`;
