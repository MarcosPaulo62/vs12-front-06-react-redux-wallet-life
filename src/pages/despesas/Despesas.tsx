import { NavLink } from "react-router-dom";
import SideHeader from "../../components/sideHeaderDashboard/SideHeaderDashboard";
import { StyledContainerDashboard } from "../dashboard/style";
import Expenses from "../../components/expensesSectionDashboard/ExpensesSectionDashboard";
import ModalAddDespesa from "../../components/modalDespesas/adicionarTransacao/ModalAdicionarDespesa";

export default function Despesas() {
    return(
        <>
        <StyledContainerDashboard>
          <SideHeader />
          <Expenses />
          <ModalAddDespesa />
        </StyledContainerDashboard>
        <NavLink to="/login"></NavLink>
      </>
    )
}