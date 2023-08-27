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

import { Pagination } from "@mui/material";
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
import { selectQuantidadeInvestments } from "../../store/investments/Selectors";
import {
  QuantidadeInvestments,
  QuantidadeInvestmentsSlice,
} from "../../store/investments/QuantidadeInvestmentsSlice";
import { selectTotalInvestments } from "../../store/users/selectors";
import { TotaisSlice, TotalInvestments } from "../../store/users/TotaisSlice";
import { formatNumber } from "../principalSectionDashboard/PrincipalSectionDashboard";

interface InvesttmentSectionProps {
  handleOpenModal: () => void;
}

export default function InvestmentsSectionDashboard({
  handleOpenModal,
}: InvesttmentSectionProps) {
  ("");

  const dispatch = useAppDispatch();
  const investments = useSelector(selectInvestments);
  const quantidadeInvestments = useSelector(selectQuantidadeInvestments);
  const totalInvestments = useSelector(selectTotalInvestments);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;
  const [searchInput, setSearchInput] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleSearchClick = () => {
    dispatch(InvestmentsSlice.actions.resetInvestments());
    dispatch(
      ListInvestments({
        pagina: currentPage - 1,
        quantidadeRegistros: itemsPerPage,
        corretora: searchInput,
      })
    );
    dispatch(QuantidadeInvestmentsSlice.actions.resetInvestments());
    dispatch(QuantidadeInvestments({}));
  };

  useEffect(() => {
    dispatch(InvestmentsSlice.actions.resetInvestments());
    dispatch(
      ListInvestments({
        pagina: currentPage - 1,
        quantidadeRegistros: itemsPerPage,
      })
    );
    dispatch(QuantidadeInvestmentsSlice.actions.resetInvestments());
    dispatch(QuantidadeInvestments({}));
    dispatch(TotaisSlice.actions.resetTotais());
    dispatch(TotalInvestments({}));
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
        <StyledTitle
          className="styled-title"
          fontWeight={700}
          tag={"h2"}
          fontSize={"lg"}
        >
          INVESTIMENTOS
        </StyledTitle>
      </StyledDashboardLabel>
      <StyledTotalDiv themecolor={"investimentos"}>
        <StyledTotalTitle>Total investido:</StyledTotalTitle>
        <StyledTotalValueAndPlusButton>
          <StyledTotalValue>
            R$ {formatNumber(totalInvestments)}
          </StyledTotalValue>
          <StyledPlusButton onClick={handleOpenModal}>+</StyledPlusButton>
        </StyledTotalValueAndPlusButton>
      </StyledTotalDiv>
      <StyledInputAndButtonDiv>
        <StyledDashboardInput
          type="text"
          placeholder="busque uma corretora"
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
          {investments.map((investment) => (
            <li key={investment.idInvestimento}>
              <ItemDashboard
                description={investment.descricao}
                value={investment.valor}
                currentPage="investimentos"
                id={investment.idInvestimento}
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
    </StyledSectionDashboard>
  );
}
