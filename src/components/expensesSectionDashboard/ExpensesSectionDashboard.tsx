import { StyledSpan, StyledTitle } from "../../styles/typography";
import { StyledDashboardInput, StyledDashboardLabel, StyledDashboardSearchButton, StyledInputAndButtonDiv, StyledPlusButton, StyledTotalDiv, StyledTotalTitle, StyledTotalValue, StyledTotalValueAndPlusButton } from "../../styles/dashboardSections";
import { StyledSectionDashboard } from "../revenuesSectionDashboard/style";
import ItemDashboard from "../itemDashboard/ItemDashboard";

export default function ExpensesSectionDashboard() {
  return (
    <StyledSectionDashboard>
      <StyledDashboardLabel themecolor={"despesas"}>
        <StyledTitle fontWeight={700} tag={"h2"} fontSize={"lg"}>
          DESPESAS
        </StyledTitle>
      </StyledDashboardLabel>
      <StyledTotalDiv themecolor={"despesas"}>
        <StyledTotalTitle>Despesas totais:</StyledTotalTitle>
        <StyledTotalValueAndPlusButton>
        <StyledTotalValue>R$ -800,00</StyledTotalValue>
        <StyledPlusButton>+</StyledPlusButton>
        </StyledTotalValueAndPlusButton>
      </StyledTotalDiv>
      <StyledInputAndButtonDiv>
      <StyledDashboardInput placeholder="busque uma despesa"></StyledDashboardInput>
      <StyledDashboardSearchButton />
      </StyledInputAndButtonDiv>
      
      <div className="itens-paginacao">
        <ul>
          <li><ItemDashboard currentPage="despesas" ></ItemDashboard></li>
        </ul>
      </div>

    </StyledSectionDashboard>
  );
}