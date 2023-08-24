import { NavLink } from "react-router-dom";
import SideHeader from "../../components/sideHeaderDashboard/SideHeaderDashboard";
import PrincipalSectionDashboard from "../../components/principalSectionDashboard/PrincipalSectionDashboard";
import { StyledContainerDashboard } from "./style";

export default function Dashboard() {
  return (
    <>
      <StyledContainerDashboard>
        <SideHeader />
        <PrincipalSectionDashboard />
      </StyledContainerDashboard>
      <NavLink to="/login"></NavLink>
    </>
  );
}
