import { StyledSpan, StyledTitle } from "../../styles/typography";
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
  StyledItemlDiv,
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
import { useEffect } from "react";

export default function RevenuesSectionDashboard() {
  const dispatch = useAppDispatch();
  const errorOnList = useSelector(selectErrorOnList);
  const recipes = useSelector(selectRecipes);
  console.log(recipes);

  useEffect(() => {
    dispatch(ListRecipes({ pagina: 0, quantidadeRegistros: 10 }));
  }, []);

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
        <StyledDashboardInput placeholder="busque uma receita"></StyledDashboardInput>
        <StyledDashboardSearchButton />
      </StyledInputAndButtonDiv>

      <div className="itens-paginacao">
        <ul>
          {recipes.map((recipe) => (
            <li>
              <ItemDashboard
                description={recipe.descricao}
                value={recipe.valor}
                currentPage="receitas"
              ></ItemDashboard>
            </li>
          ))}
        </ul>
      </div>
    </StyledSectionDashboard>
  );
}
