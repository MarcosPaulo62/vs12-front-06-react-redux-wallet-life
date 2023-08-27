import {
  StyledEyeButton,
  StyledItemDescription,
  StyledItemValue,
  StyledItemlDiv,
  StyledTrashCanButton,
} from "../../styles/dashboardSections";
import Eye from "../../assets/dashboard-olho.png";
import TrashCan from "../../assets/dashboard-lixo.png";
import { deleteExpense, deleteInvestiment, deleteRecipe } from "../../api";

interface ItemDashboardProps {
  currentPage: "despesas" | "investimentos" | "receitas";
  value: number;
  description: string;
  id: number;
}

export default function ItemDashboard({
  currentPage,
  value,
  description,
  id,
}: ItemDashboardProps) {
  let themecolor: string;

  if (currentPage === "despesas") {
    themecolor = "despesas";
  } else if (currentPage === "investimentos") {
    themecolor = "investimento";
  } else if (currentPage === "receitas") {
    themecolor = "receitas";
  }

  const handleDeleteClick = (id: number) => {
    switch (currentPage) {
      case "despesas":
        deleteExpense(id);
        break;
      case "investimentos":
        deleteInvestiment(id);
        break;
      case "receitas":
        try {
          deleteRecipe(id);
        } catch {
          console.log("erro da misera");
        }
        break;
      default:
        break;
    }
  };
  return (
    <StyledItemlDiv>
      <StyledItemValue themecolor={currentPage}>R$ {value}</StyledItemValue>
      <StyledItemDescription>{description}</StyledItemDescription>
      <StyledEyeButton></StyledEyeButton>
      <StyledTrashCanButton
        onClick={() => handleDeleteClick(id)}
      ></StyledTrashCanButton>
    </StyledItemlDiv>
  );
}
