import { NavLink } from "react-router-dom";
import SideHeader from "../../components/sideHeaderDashboard/SideHeaderDashboard";
import { StyledContainerDashboard } from "../dashboard/style";
import Expenses from "../../components/expensesSectionDashboard/ExpensesSectionDashboard";
import ModalAddDespesa from "../../components/modalDespesas/adicionarTransacao/ModalAdicionarDespesa";
import { useState } from "react";

export default function Despesas() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsModalVisible(true); 
};

const handleCloseModal = () => {
    setIsModalVisible(false); 
};
    return(
        <>
        <StyledContainerDashboard>
          <SideHeader />
          <Expenses handleOpenModal={handleOpenModal} />
          {isModalVisible && (
                    <ModalAddDespesa handleCloseModal={handleCloseModal} />
                )}
        </StyledContainerDashboard>
        <NavLink to="/login"></NavLink>
      </>
    )
}