import {
  StyledEyeButton,
  StyledItemDescription,
  StyledItemValue,
  StyledItemlDiv,
  StyledTrashCanButton,
} from "../../styles/dashboardSections";
import Eye from "../../assets/dashboard-olho.png";
import TrashCan from "../../assets/dashboard-lixo.png";

interface ItemDashboardProps {
  currentPage: "despesas" | "investimentos" | "receitas";
}



export default function ItemDashboard({ currentPage }: ItemDashboardProps) {
  
  let themecolor: string;

  if (currentPage === "despesas") {
    themecolor = "despesas";
  } else if (currentPage === "investimentos") {
    themecolor = "investimento";
  } else if (currentPage === "receitas") {
    themecolor = "receitas";
  } 

  return (
    <StyledItemlDiv>
      <StyledItemValue themecolor={currentPage} >R$ 50,00</StyledItemValue>
      <StyledItemDescription>Descrição do item</StyledItemDescription>
      <StyledEyeButton></StyledEyeButton>
      <StyledTrashCanButton></StyledTrashCanButton>
    </StyledItemlDiv>
  );
}
