import { NavLink } from "react-router-dom";
import SideHeader from "../../components/sideHeaderDashboard/SideHeaderDashboard";
import { StyledContainerDashboard } from "../dashboard/style";
import RevenuesSectionDashboard from "../../components/revenuesSectionDashboard/RevenuesSectionDashboard";
import { useState } from "react";
import CreateRevenueModal from "../../components/ModalReceitas/CreateRevenueModal";

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
        {isModalVisible && <CreateRevenueModal onClose={handleCloseModal} />}
      </StyledContainerDashboard>
      <NavLink to="/login"></NavLink>
    </>
  );
}
