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
import {
  selectExpenses,
  selectQuantidadeExpenses,
} from "../../store/expenses/Selectors";
import {
  ExpensesSlice,
  ListExpenses,
} from "../../store/expenses/ExpensesSlice";
import { useEffect, useState } from "react";
import ItemDashboard from "../itemDashboard/ItemDashboard";
import {
  QuantidadeExpenses,
  QuantidadeExpensesSlice,
} from "../../store/expenses/QuantidadeExpensesSlice";
import { Pagination } from "@mui/material";
import { TotaisSlice, TotalExpenses } from "../../store/users/TotaisSlice";
import { selectTotalExpenses } from "../../store/users/selectors";
import { formatNumber } from "../principalSectionDashboard/PrincipalSectionDashboard";

interface ExpensesSectionProps {
  handleOpenModal: () => void;
}

export default function ExpensesSectionDashboard({ handleOpenModal }: ExpensesSectionProps) {
  const dispatch = useAppDispatch();
  const expenses = useSelector(selectExpenses);
  const quantidadeExpenses = useSelector(selectQuantidadeExpenses);
  const totalExpenses = useSelector(selectTotalExpenses);

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    dispatch(ExpensesSlice.actions.resetExpenses());
    dispatch(ListExpenses({}));
    dispatch(QuantidadeExpensesSlice.actions.resetExpenses());
    dispatch(QuantidadeExpenses({}));
    dispatch(TotaisSlice.actions.resetTotais());
    dispatch(TotalExpenses({}));
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
          <StyledTotalValue>R$ -{formatNumber(totalExpenses)}</StyledTotalValue>
          <StyledPlusButton>+</StyledPlusButton>
        </StyledTotalValueAndPlusButton>
      </StyledTotalDiv>
      <StyledInputAndButtonDiv>
        <StyledDashboardInput placeholder="busque uma despesa"></StyledDashboardInput>
        <StyledDashboardSearchButton
          aria-label={
            "Imagem de uma lupa, indicando que este botão serve para ativar a pesquisa com o parâmetro inserido no campo"
          }
        />
      </StyledInputAndButtonDiv>

      <div className="itens-paginacao">
        <ul>
          {expensesToDisplay.map((expense) => (
            <li key={expense.idDespesa}>
              <ItemDashboard
                description={expense.descricao}
                value={expense.valor}
                currentPage="despesas"
                id={expense.idDespesa}
              />
            </li>
          ))}
        </ul>
      </div>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
      />
    </StyledSectionDashboard>
  );
}
