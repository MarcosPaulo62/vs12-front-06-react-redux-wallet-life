import { NavLink } from "react-router-dom";
import SideHeader from "../../components/sideHeaderDashboard/SideHeaderDashboard";
import { StyledContainerDashboard } from "../dashboard/style";
import InvestmentsSectionDashboard from "../../components/investmentsSectionDashboard/InvestmentsSectionDashboard";

export default function Receitas() {
    return(
        <>
        <StyledContainerDashboard>
          <SideHeader />
          <InvestmentsSectionDashboard />
        </StyledContainerDashboard>
        <NavLink to="/login"></NavLink>
      </>
    )
}