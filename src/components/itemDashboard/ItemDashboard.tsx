import {
  StyledEyeButton,
  StyledItemDescription,
  StyledItemValue,
  StyledItemlDiv,
  StyledTrashCanButton,
} from "../../styles/dashboardSections";
import { deleteExpense, deleteInvestiment, deleteRecipe } from "../../api";
import { useState } from "react";
import ModalDeletarTransacao from "../modalDeletarTransacao/ModalDeletarTransacao";

interface ItemDashboardProps {
  currentPage: "despesas" | "investimentos" | "receitas";
  value: number;
  description: string;
  id: number;
  onViewClick?: () => void;
  onDeleteClick: () => void;
  sucessoExclusao: () => void;
}

export default function ItemDashboard({
  currentPage,
  value,
  description,
  id,
  onViewClick,
  onDeleteClick,
  sucessoExclusao,
}: ItemDashboardProps) {
  let themecolor: string;

  if (currentPage === "despesas") {
    themecolor = "despesas";
  } else if (currentPage === "investimentos") {
    themecolor = "investimento";
  } else if (currentPage === "receitas") {
    themecolor = "receitas";
  }

  const [showModalDelete, setShowModalDelete] = useState<Boolean>(false);

  const handleDeleteClick = async (id: number) => {
    switch (currentPage) {
      case "despesas":
        await deleteExpense(id);
        break;
      case "investimentos":
        await deleteInvestiment(id);
        break;
      case "receitas":
        try {
          await deleteRecipe(id);
        } catch {
          console.log("erro da misera");
        }
        break;
      default:
        break;
    }
  };

  function deleteClick() {
    handleDeleteClick(id);
    onDeleteClick();
    sucessoExclusao();
  }
  return (
    <StyledItemlDiv>
      {showModalDelete && (
        <ModalDeletarTransacao
          onClose={() => setShowModalDelete(false)}
          onConfirm={() => deleteClick()}
        />
      )}
      <StyledItemValue themecolor={currentPage}>R$ {value}</StyledItemValue>
      <StyledItemDescription>{description}</StyledItemDescription>
      {
        <StyledEyeButton
          onClick={onViewClick}
          aria-label={
            "Imagem de um olho, indicando que este botão serve para ver detalhes deste item"
          }
          data-testid="logo-link-home"
        ></StyledEyeButton>
      }
      <StyledTrashCanButton
        aria-label={
          "Imagem de uma lata de lixo, indicando que este botão serve para excluir este item da lista"
        }
        onClick={() => setShowModalDelete(true)}
      ></StyledTrashCanButton>
    </StyledItemlDiv>
  );
}
