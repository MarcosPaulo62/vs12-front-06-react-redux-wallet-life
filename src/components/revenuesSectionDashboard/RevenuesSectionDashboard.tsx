import { StyledSpan, StyledTitle } from "../../styles/typography";
import { StyledSectionDashboard } from "./style";
import { StyledDashboardLabel, StyledDashboardInput, StyledInputAndButtonDiv, StyledPlusButton, StyledTotalDiv, StyledTotalTitle, StyledTotalValue, StyledTotalValueAndPlusButton, StyledDashboardSearchButton, StyledItemlDiv } from "../../styles/dashboardSections";
import ItemDashboard from "../itemDashboard/ItemDashboard";

export default function RevenuesSectionDashboard() {
  return (
    <StyledSectionDashboard>
      <StyledDashboardLabel themecolor={"receitas"}>
        <StyledTitle fontWeight={700} tag={"h2"} fontSize={"lg"}>
          RECEITAS
        </StyledTitle>
      </StyledDashboardLabel>
      <StyledTotalDiv themecolor={"receitas"}>
        <StyledTotalTitle>Receitas totais:</StyledTotalTitle>
        <StyledTotalValueAndPlusButton>
        <StyledTotalValue>R$ 800,00</StyledTotalValue>
        <StyledPlusButton>+</StyledPlusButton>
        </StyledTotalValueAndPlusButton>
      </StyledTotalDiv>
      <StyledInputAndButtonDiv>
      <StyledDashboardInput placeholder="busque uma receita"></StyledDashboardInput>
      <StyledDashboardSearchButton />
      </StyledInputAndButtonDiv>
      
      <div className="itens-paginacao">
        <ul>
          <li><ItemDashboard currentPage="receitas"></ItemDashboard></li>
        </ul>
      </div>

    </StyledSectionDashboard>
  );
}
