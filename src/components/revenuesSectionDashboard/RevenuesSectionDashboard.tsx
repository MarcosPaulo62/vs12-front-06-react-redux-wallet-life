import { Pagination } from '@mui/material';
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
import { selectQuantidadeRecipes } from '../../store/recipes/Selectors';
import { QuantidadeRecipes, QuantidadeRecipesSlice } from '../../store/recipes/QuantidadeRecipesSlice';

export default function RevenuesSectionDashboard() {''
  const dispatch = useAppDispatch();
  const recipes = useSelector(selectRecipes);
  const quantidadeRecipes = useSelector(selectQuantidadeRecipes);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;

  useEffect(() => {
    dispatch(RecipesSlice.actions.resetRecipes());
    dispatch(ListRecipes({ pagina: currentPage - 1, quantidadeRegistros: itemsPerPage }));
    dispatch(QuantidadeRecipesSlice.actions.resetRecipes());
    dispatch(QuantidadeRecipes({}));
  }, [currentPage]);

  const totalPages: number = Math.ceil(quantidadeRecipes / itemsPerPage);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ): void => {
    setCurrentPage(page);
  };

  return (
    <StyledSectionDashboard>
      <StyledDashboardLabel themecolor={"receitas"}>
        <StyledTitle fontWeight={700} tag={"h2"} fontSize={"lg"}>
          RECEITAS
        </StyledTitle>
      </StyledDashboardLabel>
      <StyledTotalDiv themecolor={"receitas"}>
        <StyledTotalTitle>Receitas totais:</StyledTotalTitle>
        <StyledTotalValueAndPlusButton>
          <StyledTotalValue>R$ 800,00</StyledTotalValue>
          <StyledPlusButton>+</StyledPlusButton>
        </StyledTotalValueAndPlusButton>
      </StyledTotalDiv>
      <StyledInputAndButtonDiv>
        <StyledDashboardInput placeholder="busque uma receita" ></StyledDashboardInput>
        <StyledDashboardSearchButton aria-label={"Imagem de uma lupa, indicando que este botão serve para ativar a pesquisa com o parâmetro inserido no campo"}/>
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
              />
            </li>
          ))}
        </ul>
      </div>
      <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} />
    </StyledSectionDashboard>
  );
}
