import { NavLink } from "react-router-dom";
import SideHeader from "../../components/sideHeaderDashboard/SideHeaderDashboard";
import { StyledContainerDashboard } from "../dashboard/style";
import InvestmentsSectionDashboard from "../../components/investmentsSectionDashboard/InvestmentsSectionDashboard";
import ModalAddInvestimento from "../../components/modalInvestimentos/adicionarTransacao/ModalAdicionarInvestimento";
import { useState } from "react";


export default function Investimentos() {
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
          <InvestmentsSectionDashboard handleOpenModal={handleOpenModal} />
          {isModalVisible && (
                    <ModalAddInvestimento handleCloseModal={handleCloseModal} />
                )}
        </StyledContainerDashboard>
        <NavLink to="/login"></NavLink>
      </>
    )
}