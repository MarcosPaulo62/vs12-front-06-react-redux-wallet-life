import { StyledTitle } from "../../styles/typography";
import {
  StyledDashboardInput,
  StyledDashboardLabel,
  StyledDashboardSearchButton,
  StyledInputAndButtonDiv,
  StyledPlusButton,
  StyledTotalDiv,
  StyledTotalTitle,
  StyledTotalValue,
  StyledTotalValueAndPlusButton,
} from "../../styles/dashboardSections";
import { StyledSectionDashboard } from "../revenuesSectionDashboard/style";

export default function InvestmentsSectionDashboard() {
  return (
    <StyledSectionDashboard>
      <StyledDashboardLabel themecolor={"investimentos"}>
        <StyledTitle fontWeight={700} tag={"h2"} fontSize={"lg"}>
          INVESTIMENTOS
        </StyledTitle>
      </StyledDashboardLabel>
      <StyledTotalDiv themecolor={"investimentos"}>
        <StyledTotalTitle>Total investido:</StyledTotalTitle>
        <StyledTotalValueAndPlusButton>
          <StyledTotalValue>R$ 15.000,00</StyledTotalValue>
          <StyledPlusButton>+</StyledPlusButton>
        </StyledTotalValueAndPlusButton>
      </StyledTotalDiv>
      <StyledInputAndButtonDiv>
        <StyledDashboardInput placeholder="busque uma despesa"></StyledDashboardInput>
        <StyledDashboardSearchButton aria-label={"Imagem de uma lupa, indicando que este botão serve para ativar a pesquisa com o parâmetro inserido no campo"}/>
      </StyledInputAndButtonDiv>

      <div className="itens-paginacao">
        <ul></ul>
      </div>
    </StyledSectionDashboard>
  );
}
