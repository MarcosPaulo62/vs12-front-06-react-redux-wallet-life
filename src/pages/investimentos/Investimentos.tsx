import { NavLink } from "react-router-dom";
import SideHeader from "../../components/sideHeaderDashboard/SideHeaderDashboard";
import { ContainerPage, StyledContainerDashboard } from "../dashboard/style";
import InvestmentsSectionDashboard from "../../components/investmentsSectionDashboard/InvestmentsSectionDashboard";
import PieChart from "../../components/investimentGraphic/InvestimentGraphic";


export default function Investimentos() {

  const data = [10, 90];
  const labels = ['Renda Fixa', 'Renda Variável'];
  
    return(
        <>
        <StyledContainerDashboard>
          <SideHeader />
          <ContainerPage>
          <InvestmentsSectionDashboard/>
          <PieChart dataFixa={10} dataVariavel={90}/>
          </ContainerPage>
        </StyledContainerDashboard>
        <NavLink to="/login"></NavLink>
      </>
    )
}