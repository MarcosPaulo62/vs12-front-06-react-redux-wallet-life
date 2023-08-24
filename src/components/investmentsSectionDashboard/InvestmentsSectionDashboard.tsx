import { StyledSpan, StyledTitle } from "../../styles/typography";
import { StyledDashboardInput, StyledDashboardLabel, StyledDashboardSearchButton, StyledInputAndButtonDiv, StyledPlusButton, StyledTotalDiv, StyledTotalTitle, StyledTotalValue, StyledTotalValueAndPlusButton } from "../../styles/dashboardSections";
import { StyledSectionDashboard } from "../revenuesSectionDashboard/style";
import ItemDashboard from "../itemDashboard/ItemDashboard";

export default function RevenuesSectionDashboard() {
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
      <StyledDashboardSearchButton />
      </StyledInputAndButtonDiv>
      
      <div className="itens-paginacao">
        <ul>
          <li><ItemDashboard ></ItemDashboard></li>
        </ul>
      </div>

    </StyledSectionDashboard>
  );
}