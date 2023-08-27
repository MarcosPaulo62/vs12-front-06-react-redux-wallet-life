import { styled } from "styled-components";


export const StyledChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  align-items: center;
  gap: 30px;
  justify-content: flex-start;


  .divGeralLegenda{
    display: flex;
    flex-direction: column;
    gap: 30px;
    min-width: 50%;
    gap: 10px;
  }

  .divVariavel{
    display: flex;
    gap: 5px;
    align-items: center;
  }

  .divFixa{
    display: flex;
    gap: 5px;
    align-items: center;
  }

  .fixa{
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: #819463;
  }

  .variavel{
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: #393838;
  }
`;
