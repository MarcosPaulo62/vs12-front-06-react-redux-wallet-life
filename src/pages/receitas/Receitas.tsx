import { NavLink } from "react-router-dom";
import SideHeader from "../../components/sideHeaderDashboard/SideHeaderDashboard";
import { StyledContainerDashboard } from "../dashboard/style";
import RevenuesSectionDashboard from "../../components/revenuesSectionDashboard/RevenuesSectionDashboard";

export default function Receitas() {
  return (
    <>
      <StyledContainerDashboard>
        <SideHeader />
        <RevenuesSectionDashboard />
      </StyledContainerDashboard>
      <NavLink to="/login"></NavLink>
    </>
  );
}
