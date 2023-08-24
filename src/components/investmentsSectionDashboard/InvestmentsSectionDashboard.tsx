import { StyledSpan, StyledTitle } from "../../styles/typography";
import { StyledDashboardLabel } from "../../styles/dashboardSections";
import { StyledSectionDashboard } from "../revenuesSectionDashboard/style";

export default function InvestmentsSectionDashboard() {
  return (
    <StyledSectionDashboard>
      <StyledDashboardLabel themecolor={"investimentos"}>
        <StyledTitle fontWeight={700} tag={"h2"} fontSize={"lg"}>
          INVESTIMENTOS
        </StyledTitle>
      </StyledDashboardLabel>
    </StyledSectionDashboard>
  );
}