import { ServicesContainer } from "./style";
import { StyledTitle, StyledTag, StyledSpan } from "../../styles/typography";
import IconChart from "../../assets/iconeGrafico.png";
import IconRevenue from "../../assets/iconeMoneyUp.png";
import IconCalculator from "../../assets/iconeCalculadoraMoedas.png";
import IconLamp from "../../assets/iconeLampada.png";

export default function Services() {
  return (
    <ServicesContainer>
      <div className="services-text">
        <StyledTitle
          className="styled-title"
          fontWeight={700}
          tag={"h2"}
          fontSize={"lg"}
        >
          Conheça nossos serviços!
        </StyledTitle>
        <StyledTag className="styled-tag">
          oferecemos uma variedade de recursos para você controlar suas
          finanças!
        </StyledTag>
      </div>
      <div className="services-grid">
        <div className="grid-item">
          <div className="circle blue-circle">
            <img
              src={IconChart}
              alt="Ícone representando um gráfico de barras com valores em crescimento"
            />
          </div>
          <StyledSpan className="styled-span" fontSize={"lg"}>
            Gráfico de investimentos
          </StyledSpan>
        </div>
        <div className="grid-item">
          <div className="circle green-circle">
            <img
              src={IconRevenue}
              alt="Ícone representando um gráfico de barras com valores em crescimento"
            />
          </div>
          <StyledSpan className="styled-span" fontSize={"lg"}>
            Controle de receita
          </StyledSpan>
        </div>
        <div className="grid-item">
          <div className="circle red-circle">
            <img
              src={IconCalculator}
              alt="Ícone representando um gráfico de barras com valores em crescimento"
            />
          </div>
          <StyledSpan className="styled-span" fontSize={"lg"}>
            Controle de despesas
          </StyledSpan>
        </div>
        <div className="grid-item">
          <div className="circle">
            <img
              src={IconLamp}
              alt="Ícone representando um gráfico de barras com valores em crescimento"
            />
          </div>
          <StyledSpan className="styled-span" fontSize={"lg"}>
            Fácil, rápido e intuitivo
          </StyledSpan>
        </div>
      </div>
    </ServicesContainer>
  );
}
