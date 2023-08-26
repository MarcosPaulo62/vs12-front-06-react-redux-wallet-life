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

import { Pagination } from '@mui/material';
import ItemDashboard from "../itemDashboard/ItemDashboard";
import { ListInvestments } from "../../store/investments/InvestmentsSlice";
import { InvestmentsSlice } from "../../store/investments/InvestmentsSlice";
import { useAppDispatch } from "../../store";
import { useSelector } from "react-redux";
import {
  selectErrorOnList,
  selectInvestments,
} from "../../store/investments/Selectors";
import { useEffect, useState } from "react";
import { selectQuantidadeInvestments } from '../../store/investments/Selectors';
import { QuantidadeInvestments, QuantidadeInvestmentsSlice } from '../../store/investments/QuantidadeInvestmentsSlice';


export default function InvestmentsSectionDashboard() {''

  const dispatch = useAppDispatch();
  const investments = useSelector(selectInvestments);
  const quantidadeInvestments = useSelector(selectQuantidadeInvestments);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;

  useEffect(() => {
    dispatch(InvestmentsSlice.actions.resetInvestments());
    dispatch(ListInvestments({ pagina: currentPage - 1, quantidadeRegistros: itemsPerPage }));
    dispatch(QuantidadeInvestmentsSlice.actions.resetInvestments());
    dispatch(QuantidadeInvestments({}));
  }, [currentPage]);

  const totalPages: number = Math.ceil(quantidadeInvestments / itemsPerPage);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ): void => {
    setCurrentPage(page);
  };



  return (
    <StyledSectionDashboard>
      <StyledDashboardLabel themecolor={"investimentos"}>
        <StyledTitle fontWeight={700} tag={"h2"} fontSize={"lg"}>
          INVESTIMENTOS
        </StyledTitle>
      </StyledDashboardLabel>
      <StyledTotalDiv themecolor={"investimentos"}>
        <StyledTotalTitle>Total investido:</StyledTotalTitle>
        <StyledTotalValueAndPlusButton>
          <StyledTotalValue>R$ 15.000,00</StyledTotalValue>
          <StyledPlusButton>+</StyledPlusButton>
        </StyledTotalValueAndPlusButton>
      </StyledTotalDiv>
      <StyledInputAndButtonDiv>
        <StyledDashboardInput placeholder="busque uma despesa"></StyledDashboardInput>
        <StyledDashboardSearchButton aria-label={"Imagem de uma lupa, indicando que este botão serve para ativar a pesquisa com o parâmetro inserido no campo"}/>
      </StyledInputAndButtonDiv>

      <div className="itens-paginacao">
        <ul>
          {investments.map((investment) => (
            <li key={investment.idInvestimento}>
              <ItemDashboard
                description={investment.descricao}
                value={investment.valor}
                currentPage="investimentos"
              />
            </li>
          ))}
        </ul>
      </div>
      <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} />
    </StyledSectionDashboard>
  );
}
