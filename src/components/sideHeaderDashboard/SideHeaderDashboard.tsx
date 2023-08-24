import { StyledHeader } from "./style";
import logo from "../../assets/logo-WALLETLIFE.png";
import { StyledButton } from "../../styles/buttons";
import { NavLink } from "react-router-dom";

export default function SideHeader() {
  return (
    <StyledHeader>
      <img
        src={logo}
        alt="Logo da walletLife, um quadrado preenchido na cor cinza claro, com 4 triangulos menores em cada uma das arestas, sendo um triângulo marrom escuro a direita, outro com a cor khaki abaixo, um marrom claro a esquerda e um último cinza escuro em cima. Abaixo da imagem está escrito walletlife finances."
      />
      <div>
        <NavLink className="navlink" to={"/sua-carteira"}>Início</NavLink>
        <NavLink className="navlink" to={"/sua-carteira"}>Receitas</NavLink>
        <NavLink className="navlink" to={"/sua-carteira"}>Despesas</NavLink>
        <NavLink className="navlink" to={"/sua-carteira"}>Meus dados</NavLink>
        <NavLink className="navlink" to={"/login"}>Sair</NavLink>
      </div>
    </StyledHeader>
  );
}