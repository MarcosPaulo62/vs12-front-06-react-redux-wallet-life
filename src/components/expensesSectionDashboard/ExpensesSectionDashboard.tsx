import { StyledTitle } from "../../styles/typography";
import {
  StyledDashboardInput,
  StyledDashboardLabel,
  StyledDashboardSearchButton,
  StyledInputAndButtonDiv,
  StyledPlusButton,
  StyledTotalDiv,
  StyledTotalTitle,
  StyledTotalValue,
  StyledTotalValueAndPlusButton,
} from "../../styles/dashboardSections";
import { StyledSectionDashboard } from "../revenuesSectionDashboard/style";
import { useAppDispatch } from "../../store";
import { useSelector } from "react-redux";
import { selectExpenses, selectQuantidadeExpenses } from "../../store/expenses/Selectors";
import { ExpensesSlice, ListExpenses } from "../../store/expenses/ExpensesSlice";
import { useEffect, useState } from 'react';
import ItemDashboard from "../itemDashboard/ItemDashboard";
import { QuantidadeExpenses, QuantidadeExpensesSlice } from "../../store/expenses/TotalExpensesSlice";
import { Pagination } from '@mui/material';

export default function ExpensesSectionDashboard() {
  const dispatch = useAppDispatch();
  const expenses = useSelector(selectExpenses);
  const quantidadeExpenses = useSelector(selectQuantidadeExpenses);

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    dispatch(ExpensesSlice.actions.resetExpenses());
    dispatch(ListExpenses({}));
    dispatch(QuantidadeExpensesSlice.actions.resetExpenses());
    dispatch(QuantidadeExpenses({}));
  }, []);

  const totalPages: number = Math.ceil(quantidadeExpenses / itemsPerPage);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ): void => {
    setCurrentPage(page);
  };

  const startIndex: number = (currentPage - 1) * itemsPerPage;
  const endIndex: number = startIndex + itemsPerPage;

  const expensesToDisplay = expenses.slice(startIndex, endIndex);

  return (
    <StyledSectionDashboard>
      <StyledDashboardLabel themecolor={"despesas"}>
        <StyledTitle fontWeight={700} tag={"h2"} fontSize={"lg"}>
          DESPESAS
        </StyledTitle>
      </StyledDashboardLabel>
      <StyledTotalDiv themecolor={"despesas"}>
        <StyledTotalTitle>Despesas totais:</StyledTotalTitle>
        <StyledTotalValueAndPlusButton>
          <StyledTotalValue>R$ -800,00</StyledTotalValue>
          <StyledPlusButton>+</StyledPlusButton>
        </StyledTotalValueAndPlusButton>
      </StyledTotalDiv>
      <StyledInputAndButtonDiv>
        <StyledDashboardInput placeholder="busque uma despesa"></StyledDashboardInput>
        <StyledDashboardSearchButton aria-label={"Imagem de uma lupa, indicando que este botão serve para ativar a pesquisa com o parâmetro inserido no campo"}/>
      </StyledInputAndButtonDiv>

      <div className="itens-paginacao">
        <ul>
          {expensesToDisplay.map((expense) => (
            <li key={expense.idDespesa}>
              <ItemDashboard
                description={expense.descricao}
                value={expense.valor}
                currentPage="despesas"
              />
            </li>
          ))}
        </ul>
      </div>
      <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} />
    </StyledSectionDashboard>
  );
}
