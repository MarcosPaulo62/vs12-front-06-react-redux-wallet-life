import { MenuHamburguer, StyledHeader } from "./style";
import logo from "../../assets/logo-WALLETLIFE.png";
import { NavLink } from "react-router-dom";
import { List, X, SignOut } from "@phosphor-icons/react";
import { useState } from "react";
import { useLocation } from 'react-router-dom';
import ModalMeusDados from "../modalMeusDados/ModalMeusDados";

export default function SideHeader() {
  const [showMenu, setShowMenu] = useState<Boolean>(false);
  const [showModal, setShowModal] = useState<Boolean>(false);

  const location = useLocation();
  const rotaAtual = location.pathname;

  return (
    <StyledHeader>
      { showModal && <ModalMeusDados closeModal={() => setShowModal(false)} /> }
      <div className="logo">
        <NavLink to="/">
          <img
            src={logo}
            alt="Logo da walletLife, um quadrado preenchido na cor cinza claro, com 4 triangulos menores em cada uma das arestas, sendo um triângulo marrom escuro a direita, outro com a cor khaki abaixo, um marrom claro a esquerda e um último cinza escuro em cima. Abaixo da imagem está escrito walletlife finances."
          />
        </NavLink>
      </div>
      <div className="navegacao">
        <NavLink className={`navlink ${rotaAtual == "/sua-carteira" && 'ativo'}`} to={"/sua-carteira"}>
          <span>Início</span>
        </NavLink>
        <NavLink className={`navlink ${rotaAtual == "/receitas" && 'ativo'}`} to={"/receitas"}>
          <span>Receitas</span>
        </NavLink>
        <NavLink className={`navlink ${rotaAtual == "/despesas" && 'ativo'}`} to={"/despesas"}>
          <span>Despesas</span>
        </NavLink>
        <NavLink className={`navlink ${rotaAtual == "/investimentos" && 'ativo'}`} to={"/investimentos"}>
          <span>Investimentos</span>
        </NavLink>
        <span className="navlink" onClick={() => setShowModal(true)}>Meus dados</span>
        <NavLink
          onClick={() => localStorage.removeItem("user")}
          className="navlink logout"
          to={"/"}
        >
          <span>Sair<SignOut size={40} weight="bold" /></span>            
        </NavLink>
      </div>

      <List onClick={() => setShowMenu(true)} className="menu-hamburguer" size={32} weight="thin" />
        {
          showMenu &&
          <MenuHamburguer>
            <div>
              <X className="close-menu" onClick={() => setShowMenu(false)} size={32} weight="thin" />
              <NavLink className={`navlink ${rotaAtual == "/sua-carteira" && 'ativo'}`} to={"/sua-carteira"}>
                <span>Início</span>
              </NavLink>
              <NavLink className={`navlink ${rotaAtual == "/receitas" && 'ativo'}`} to={"/receitas"}>
                <span>Receitas</span>
              </NavLink>
              <NavLink className={`navlink ${rotaAtual == "/despesas" && 'ativo'}`} to={"/despesas"}>
                <span>Despesas</span>
              </NavLink>
              <NavLink className={`navlink ${rotaAtual == "/investimentos" && 'ativo'}`} to={"/investimentos"}>
                <span>Investimentos</span>
              </NavLink>
              <span className="navlink">Meus dados</span>
              <NavLink
                onClick={() => localStorage.removeItem("user")}
                className="navlink logout"
                to={"/"}
              >
                <span>Sair<SignOut size={40} weight="bold" /></span>                                
              </NavLink>
            </div>
          </MenuHamburguer>
        }
    </StyledHeader>
  );
}
