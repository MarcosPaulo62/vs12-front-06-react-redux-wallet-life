import { StyledSpan, StyledTitle } from "../../styles/typography";
import { StyledDashboardLabel } from "../../styles/dashboardSections";
import { StyledSectionDashboard } from "../revenuesSectionDashboard/style";

export default function RevenuesSectionDashboard() {
  return (
    <StyledSectionDashboard>
      <StyledDashboardLabel themecolor={"despesas"}>
        <StyledTitle fontWeight={700} tag={"h2"} fontSize={"lg"}>
          DESPESAS
        </StyledTitle>
      </StyledDashboardLabel>
    </StyledSectionDashboard>
  );
}