import { StyledSpan, StyledTitle } from "../../styles/typography";
import { StyledSectionDashboard } from "./style";
import information from "../../assets/information.svg";
import iconeAdd from "../../assets/iconeAdd.png";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../store";
import { useSelector } from "react-redux";
import { TotaisSlice, TotalExpenses, TotalInvestments, TotalRecipes } from "../../store/users/TotaisSlice";
import { useEffect, useState } from "react";
import { selectTotalExpenses, selectTotalInvestments, selectTotalRecipes } from "../../store/users/selectors";

export default function PrincipalSectionDashboard() {
  const dispatch = useAppDispatch();
  const totalRecipes = useSelector(selectTotalRecipes);
  const totalExpenses = useSelector(selectTotalExpenses);
  const totalInvestments = useSelector(selectTotalInvestments);

  useEffect(() => {
    dispatch(TotaisSlice.actions.resetTotais());
    dispatch(TotalRecipes({}));
    dispatch(TotalExpenses({}));
    dispatch(TotalInvestments({}));
  }, []);

  function formatNumber(number: number): string {
    const formattedNumber = number.toFixed(2);
  
    const numberWithComma = formattedNumber.replace('.', ',');
  
    return numberWithComma;
  }

  return (
    <StyledSectionDashboard>
      <StyledTitle className="title" tag="h1" fontWeight={700} fontSize="lg">
        Olá, Fulano
      </StyledTitle>
      <div className="saldo-total">
        <StyledSpan className="title-card-saldo" fontSize="lg">
          Seu saldo total:
        </StyledSpan>
        <div className="saldo-card">
          <StyledSpan className="simbolo-moeda" fontSize="lg">
            R$
          </StyledSpan>
          <StyledSpan className="valor" fontSize="lg">
            {formatNumber(totalRecipes - totalExpenses)}
          </StyledSpan>
        </div>
      </div>
      <div className="section-dois">
        <NavLink className="card" to={"/receitas"}>
          <div className="card-option card1">
            <StyledSpan className="title-card-grid" fontSize="md">
              SUAS RECEITAS
            </StyledSpan>
            <div className="value-text">
              <StyledSpan className="value-card-grid" fontSize="md">
                R$ {formatNumber(totalRecipes)}
              </StyledSpan>
              <img
                className="img"
                src={information}
                alt="ícone para informações"
              />
            </div>
          </div>
        </NavLink>
        <NavLink className="card" to={"/despesas"}>
          <div className="card-option card2">
            <StyledSpan className="title-card-grid" fontSize="md">
              SUAS DESPESAS
            </StyledSpan>
            <div className="value-text">
              <StyledSpan className="value-card-grid" fontSize="md">
                R$ {formatNumber(totalExpenses)}
              </StyledSpan>
              <img
                className="img"
                src={information}
                alt="ícone para informações"
              />
            </div>
          </div>
        </NavLink>
        <NavLink className="card" to={"/investimentos"}>
          <div className="card-option card3">
            <StyledSpan className="title-card-grid" fontSize="md">
              SEUS INVESTIMENTOS
            </StyledSpan>
            <div className="value-text">
              <StyledSpan className="value-card-grid" fontSize="md">
                R$ {formatNumber(totalInvestments)}
              </StyledSpan>
              <img
                className="img"
                src={information}
                alt="ícone para informações"
              />
            </div>
          </div>
        </NavLink>
        <div className="center-option">
          <button>
            <img src={iconeAdd} alt="" />
          </button>
        </div>
      </div>
    </StyledSectionDashboard>
  );
}
