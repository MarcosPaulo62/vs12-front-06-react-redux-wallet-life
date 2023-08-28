import { useState } from "react";
import { NavLink } from "react-router-dom";
import SideHeader from "../../components/sideHeaderDashboard/SideHeaderDashboard";
import { StyledContainerDashboard } from "../dashboard/style";
import Expenses from "../../components/expensesSectionDashboard/ExpensesSectionDashboard";
import CreateExpenseModal from "../../components/modalDespesas/CreateExpenseModal";

export default function Despesas() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <StyledContainerDashboard>
        <SideHeader />
        <Expenses handleOpenModal={handleOpenModal} />
        {isModalVisible && <CreateExpenseModal onClose={handleCloseModal} />}
      </StyledContainerDashboard>
      <NavLink to="/login"></NavLink>
    </>
  );
}
