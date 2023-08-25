import { MenuHamburguer, StyledHeader } from "./style";
import logo from "../../assets/logo-WALLETLIFE.png";
import { StyledButton } from "../../styles/buttons";
import { NavLink } from "react-router-dom";
import { List, X } from "@phosphor-icons/react";
import { useState } from "react";

export default function SideHeader() {
  const [showMenu, setShowMenu] = useState<Boolean>(false);

  return (
    <StyledHeader>
      <NavLink to="/">
        <img
          src={logo}
          alt="Logo da walletLife, um quadrado preenchido na cor cinza claro, com 4 triangulos menores em cada uma das arestas, sendo um triângulo marrom escuro a direita, outro com a cor khaki abaixo, um marrom claro a esquerda e um último cinza escuro em cima. Abaixo da imagem está escrito walletlife finances."
        />
      </NavLink>
      <div className="navegacao">
        <NavLink className="navlink" to={"/sua-carteira"}>
          Início
        </NavLink>
        <NavLink className="navlink" to={"/receitas"}>
          Receitas
        </NavLink>
        <NavLink className="navlink" to={"/despesas"}>
          Despesas
        </NavLink>
        <NavLink className="navlink" to={"/investimentos"}>
          Investimentos
        </NavLink>
        <span className="navlink">Meus dados</span>
        <NavLink
          onClick={() => localStorage.removeItem("user")}
          className="navlink"
          to={"/"}
        >
          Sair
        </NavLink>
      </div>

      <List onClick={() => setShowMenu(true)} className="menu-hamburguer" size={32} weight="thin" />
        {
          showMenu &&
          <MenuHamburguer>
            <div>
              <X className="close-menu" onClick={() => setShowMenu(false)} size={32} weight="thin" />
              <NavLink className="navlink" to={"/sua-carteira"}>
                Início
              </NavLink>
              <NavLink className="navlink" to={"/receitas"}>
                Receitas
              </NavLink>
              <NavLink className="navlink" to={"/despesas"}>
                Despesas
              </NavLink>
              <NavLink className="navlink" to={"/investimentos"}>
                Investimentos
              </NavLink>
              <span className="navlink">Meus dados</span>
              <NavLink
                onClick={() => localStorage.removeItem("user")}
                className="navlink"
                to={"/"}
              >
                Sair
              </NavLink>
            </div>
          </MenuHamburguer>
        }
    </StyledHeader>
  );
}
