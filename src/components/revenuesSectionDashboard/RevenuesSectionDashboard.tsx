import { Pagination } from "@mui/material";
import { StyledTitle } from "../../styles/typography";
import { StyledSectionDashboard } from "./style";
import {
  StyledDashboardLabel,
  StyledDashboardInput,
  StyledInputAndButtonDiv,
  StyledPlusButton,
  StyledTotalDiv,
  StyledTotalTitle,
  StyledTotalValue,
  StyledTotalValueAndPlusButton,
  StyledDashboardSearchButton,
} from "../../styles/dashboardSections";
import ItemDashboard from "../itemDashboard/ItemDashboard";
import { ListRecipes } from "../../store/recipes/RecipesSlice";
import { RecipesSlice } from "../../store/recipes/RecipesSlice";
import { useAppDispatch } from "../../store";
import { useSelector } from "react-redux";
import {
  selectErrorOnList,
  selectRecipes,
} from "../../store/recipes/Selectors";
import { useEffect, useState } from "react";
import { selectQuantidadeRecipes } from "../../store/recipes/Selectors";
import {
  QuantidadeRecipes,
  QuantidadeRecipesSlice,
} from "../../store/recipes/QuantidadeRecipesSlice";
import { selectTotalRecipes } from "../../store/users/selectors";
import { TotaisSlice, TotalRecipes } from "../../store/users/TotaisSlice";
import { formatNumber } from "../principalSectionDashboard/PrincipalSectionDashboard";
import { ToastContainer, toast } from "react-toastify";
import { Revenue } from "../../model";
import { getRecipe } from "../../api";
import UpdateRevenueModal from "../ModalReceitas/UpdateRevenueModal";

interface RevenueSectionProps {
  handleOpenModal: () => void;
}

export default function RevenuesSectionDashboard({
  handleOpenModal,
}: RevenueSectionProps) {
  ("");
  const dispatch = useAppDispatch();
  const recipes = useSelector(selectRecipes);
  const quantidadeRecipes = useSelector(selectQuantidadeRecipes);
  const totalRecipes = useSelector(selectTotalRecipes);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;
  const [searchInput, setSearchInput] = useState("");
  const [reload, setReload] = useState(false);
  const [revenue, setRevenue] = useState<Revenue>();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleSearchClick = () => {
    dispatch(RecipesSlice.actions.resetRecipes());
    dispatch(
      ListRecipes({
        pagina: currentPage - 1,
        quantidadeRegistros: itemsPerPage,
        valor: Number(searchInput),
      })
    );
    dispatch(QuantidadeRecipesSlice.actions.resetRecipes());
    dispatch(QuantidadeRecipes({}));
  };
  useEffect(() => {
    dispatch(RecipesSlice.actions.resetRecipes());
    dispatch(
      ListRecipes({
        pagina: currentPage - 1,
        quantidadeRegistros: itemsPerPage,
      })
    );
    dispatch(QuantidadeRecipesSlice.actions.resetRecipes());
    dispatch(QuantidadeRecipes({}));
    dispatch(TotaisSlice.actions.resetTotais());
    dispatch(TotalRecipes({}));
    setReload(false);
  }, [currentPage, reload]);

  const totalPages: number = Math.ceil(quantidadeRecipes / itemsPerPage);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ): void => {
    setCurrentPage(page);
  };

  const loadRevenue = async (id: number) => {
    const revenue = await getRecipe(id);
    setRevenue(revenue);
  };

  function sucessoExclusao() {
    toast.success("Transação excluída com sucesso!", {
      position: toast.POSITION.TOP_CENTER,
    });
  }

  return (
    <StyledSectionDashboard>
      <StyledDashboardLabel themecolor={"receitas"}>
        <StyledTitle
          className="styled-title"
          fontWeight={700}
          tag={"h2"}
          fontSize={"lg"}
        >
          RECEITAS
        </StyledTitle>
      </StyledDashboardLabel>
      <StyledTotalDiv themecolor={"receitas"}>
        <StyledTotalTitle>Receitas totais:</StyledTotalTitle>
        <StyledTotalValueAndPlusButton>
          <StyledTotalValue>R$ {formatNumber(totalRecipes)}</StyledTotalValue>
          <StyledPlusButton onClick={handleOpenModal}>+</StyledPlusButton>
        </StyledTotalValueAndPlusButton>
      </StyledTotalDiv>
      <StyledInputAndButtonDiv>
        <StyledDashboardInput
          type="number"
          placeholder="busque um valor mínimo"
          onChange={handleSearchChange}
        ></StyledDashboardInput>
        <StyledDashboardSearchButton
          onClick={handleSearchClick}
          aria-label={
            "Imagem de uma lupa, indicando que este botão serve para ativar a pesquisa com o parâmetro inserido no campo"
          }
        />
      </StyledInputAndButtonDiv>

      <div className="itens-paginacao">
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.idReceita}>
              <ItemDashboard
                description={recipe.descricao}
                value={recipe.valor}
                currentPage="receitas"
                id={recipe.idReceita}
                onViewClick={() => loadRevenue(recipe.idReceita)}
                onDeleteClick={() => setReload(true)}
                sucessoExclusao={() => sucessoExclusao()}
              />
            </li>
          ))}
        </ul>
      </div>
      <Pagination
        className="paginacao"
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
      />
      {revenue && (
        <UpdateRevenueModal
          revenue={revenue}
          onClose={() => setRevenue(undefined)}
        />
      )}
      <ToastContainer />
    </StyledSectionDashboard>
  );
}
