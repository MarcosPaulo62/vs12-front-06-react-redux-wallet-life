import { Pagination } from "@mui/material";
import { StyledTitle } from "../../styles/typography";
import { StyledSectionDashboard } from "../revenuesSectionDashboard/style";
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
import { ListExpenses, QuantidadeExpenses } from "../../store/expenses";
import {
  ExpensesSlice,
  resetExpenses,
} from "../../store/expenses/ExpensesSlice";
import { useAppDispatch } from "../../store";
import { useSelector } from "react-redux";
import { selectExpenses } from "../../store/expenses/Selectors";
import { useEffect, useState } from "react";
import { selectQuantidadeExpenses } from "../../store/expenses/Selectors";
import { resetQuantidadeExpenses } from "../../store/expenses";
import { selectTotalExpenses } from "../../store/users/selectors";
import { TotaisSlice, TotalExpenses } from "../../store/users/TotaisSlice";
import { formatNumber } from "../principalSectionDashboard/PrincipalSectionDashboard";
import { Expense } from "../../model";
import UpdateExpenseModal from "../modalDespesas/UpdateExpenseModal";
import { getExpense } from "../../api";

interface RevenueSectionProps {
  handleOpenModal: () => void;
}

export default function RevenuesSectionDashboard({
  handleOpenModal,
}: RevenueSectionProps) {
  ("");
  const dispatch = useAppDispatch();
  const expenses = useSelector(selectExpenses);
  const quantidadeExpenses = useSelector(selectQuantidadeExpenses);
  const totalExpenses = useSelector(selectTotalExpenses);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;
  const [searchInput, setSearchInput] = useState("");
  const [expense, setExpense] = useState<Expense>();
  const [reload, setReload] = useState(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleSearchClick = () => {
    dispatch(resetExpenses());
    dispatch(
      ListExpenses({
        pagina: currentPage - 1,
        quantidadeRegistros: itemsPerPage,
        valor: Number(searchInput),
      })
    );
    dispatch(resetQuantidadeExpenses());
    dispatch(QuantidadeExpenses({}));
  };

  useEffect(() => {
    dispatch(ExpensesSlice.actions.resetExpenses());
    dispatch(
      ListExpenses({
        pagina: currentPage - 1,
        quantidadeRegistros: itemsPerPage,
      })
    );
    dispatch(resetQuantidadeExpenses());
    dispatch(QuantidadeExpenses({}));
    dispatch(TotaisSlice.actions.resetTotais());
    dispatch(TotalExpenses({}));
    setReload(false);
  }, [currentPage, reload]);

  const totalPages: number = Math.ceil(quantidadeExpenses / itemsPerPage);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ): void => {
    setCurrentPage(page);
  };

  const loadExpense = async (id: number) => {
    const expense = await getExpense(id);
    setExpense(expense);
  };

  return (
    <StyledSectionDashboard>
      <StyledDashboardLabel themecolor={"despesas"}>
        <StyledTitle
          className="styled-title"
          fontWeight={700}
          tag={"h2"}
          fontSize={"lg"}
        >
          DESPESAS
        </StyledTitle>
      </StyledDashboardLabel>
      <StyledTotalDiv themecolor={"despesas"}>
        <StyledTotalTitle>Despesas totais:</StyledTotalTitle>
        <StyledTotalValueAndPlusButton>
          <StyledTotalValue>R$ -{formatNumber(totalExpenses)}</StyledTotalValue>
          <StyledPlusButton onClick={handleOpenModal}>+</StyledPlusButton>
        </StyledTotalValueAndPlusButton>
      </StyledTotalDiv>
      <StyledInputAndButtonDiv>
        <StyledDashboardInput
          placeholder="busque uma despesa"
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
          {expenses.map((expense) => (
            <li key={expense.idDespesa}>
              <ItemDashboard
                description={expense.descricao}
                value={expense.valor}
                currentPage="despesas"
                id={expense.idDespesa}
                onViewClick={() => loadExpense(expense.idDespesa)}
                onDeleteClick={() => setReload(true)}
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
      {expense && (
        <UpdateExpenseModal
          expense={expense}
          onClose={() => setExpense(undefined)}
        />
      )}
    </StyledSectionDashboard>
  );
}
