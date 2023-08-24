import { StyledSpan, StyledTitle } from "../../styles/typography";
import { StyledSectionDashboard } from "./style";
import { StyledDashboardLabel } from "../../styles/dashboardSections";

export default function RevenuesSectionDashboard() {
  return (
    <StyledSectionDashboard>
      <StyledDashboardLabel themecolor={"receitas"}>
        <StyledTitle fontWeight={700} tag={"h2"} fontSize={"lg"}>
          RECEITAS
        </StyledTitle>
      </StyledDashboardLabel>
    </StyledSectionDashboard>
  );
}
