import { NavLink } from "react-router-dom";
import SideHeader from "../../components/sideHeaderDashboard/SideHeaderDashboard";
import { StyledContainerDashboard } from "../dashboard/style";
import ExpensesSectionDashboard from "../../components/expensesSectionDashboard/ExpensesSectionDashboard";

export default function Receitas() {
    return(
        <>
        <StyledContainerDashboard>
          <SideHeader />
          <ExpensesSectionDashboard />
        </StyledContainerDashboard>
        <NavLink to="/login"></NavLink>
      </>
    )
}