import { DifferentialsContainer } from "./style";
import { StyledTitle, StyledSpan } from "../../styles/typography";
import { StyledButton } from "../../styles/buttons";
import ImgCafe from "../../assets/café.png";
import { NavLink } from "react-router-dom";

export default function DifferentialsInNumbers() {
  return (
    <DifferentialsContainer>
      <div className="left-side">
        <div className="numbers-grid">
          <div className="grid-item">
            <StyledTitle
              className="number"
              fontWeight={700}
              tag={"h2"}
              fontSize={"lg"}
            >
              100 K
            </StyledTitle>
            <StyledSpan className="styled-span" fontSize={"lg"}>
              Clientes
            </StyledSpan>
          </div>
          <div className="grid-item">
            <StyledTitle
              className="number"
              fontWeight={700}
              tag={"h2"}
              fontSize={"lg"}
            >
              98%
            </StyledTitle>
            <StyledSpan className="styled-span" fontSize={"lg"}>
              Clientes satisfeitos
            </StyledSpan>
          </div>
          <div className="grid-item">
            <StyledTitle
              className="number"
              fontWeight={700}
              tag={"h2"}
              fontSize={"lg"}
            >
              83%
            </StyledTitle>
            <StyledSpan className="styled-span" fontSize={"lg"}>
              Crescimento anual
            </StyledSpan>
          </div>
          <div className="grid-item">
            <StyledTitle
              className="number"
              fontWeight={700}
              tag={"h2"}
              fontSize={"lg"}
            >
              +100 B
            </StyledTitle>
            <StyledSpan className="styled-span" fontSize={"lg"}>
              Valor gerenciado
            </StyledSpan>
          </div>
        </div>

        <div className="div-btn">
          <NavLink
            to={localStorage.getItem("user") ? "/sua-carteira" : "/login"}
          >
            <StyledButton
              className="styled-btn"
              buttonsize={"lg"}
              buttonstyle={"landingPage"}
            >
              entrar na plataforma!
            </StyledButton>
          </NavLink>
        </div>

      </div>

      <div className="img-cafe">
        <img
          className="img-cafe-img"
          src={ImgCafe}
          alt="Imagem das mãos de uma pessoa trabalhando num computador portátil, ladeado por um par de óculos e por um grande copo de café ao estilo americano"
        />
      </div>
    </DifferentialsContainer>
  );
}
