import { NavLink } from "react-router-dom";
import SideHeader from "../../components/sideHeaderDashboard/SideHeaderDashboard";
import { StyledContainerDashboard } from "../dashboard/style";
import RevenuesSectionDashboard from "../../components/revenuesSectionDashboard/RevenuesSectionDashboard";
import { useState } from "react";
import ModalAddReceita from "../../components/ModalReceitas/adicionarReceitas/ModalAdicionarReceita";

export default function Receitas() {
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
        <RevenuesSectionDashboard handleOpenModal={handleOpenModal} />
          {isModalVisible && (
                    <ModalAddReceita handleCloseModal={handleCloseModal} />
                )} 
      </StyledContainerDashboard>
      <NavLink to="/login"></NavLink>
    </>
  );
}
