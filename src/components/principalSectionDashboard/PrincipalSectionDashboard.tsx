import { StyledSpan, StyledTitle } from "../../styles/typography";
import { StyledSectionDashboard } from "./style";
import information from '../../assets/information.svg'
import iconeAdd from '../../assets/iconeAdd.png'

export default function PrincipalSectionDashboard() {
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
            0,00
          </StyledSpan>
        </div>
      </div>
      <div className="section-dois">
        <div className="card-option">
          <StyledSpan className="title-card-grid" fontSize="md">SUAS RECEITAS</StyledSpan>
          <StyledSpan className="value-card-grid" fontSize="md">R$ 5000,00</StyledSpan>
          <img className="img" src={information} alt="ícone para informações" />
        </div>
        <div className="card-option">
          <StyledSpan className="title-card-grid" fontSize="md">SUAS DESPESAS</StyledSpan>
          <StyledSpan className="value-card-grid" fontSize="md">R$ 5000,00</StyledSpan>
          <img className="img" src={information} alt="ícone para informações" />
        </div>
        <div className="card-option">
          <StyledSpan className="title-card-grid" fontSize="md">SEUS INVESTIMENTOS</StyledSpan>
          <StyledSpan className="value-card-grid" fontSize="md">R$ 5000,00</StyledSpan>
          <img className="img" src={information} alt="ícone para informações" />
        </div>
        <div className="center-option">
            <button><img src={iconeAdd} alt="" /></button>
        </div>
      </div>
    </StyledSectionDashboard>
  );
}
