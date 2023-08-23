import { StyledHeader } from "./style";
import logo from '../../assets/logo-WALLETLIFE.png'

export default function Header () {
    return (
        <StyledHeader>
            <img src={logo} alt="Logo da walletLife, um quadrado preenchido na cor cinza claro, com 4 triangulos menores em cada uma das arestas, sendo um triângulo marrom escuro a direita, outro com a cor khaki abaixo, um marrom claro a esquerda e um último cinza escuro em cima. Abaixo da imagem está escrito walletlife finances." />
            <div>
                <button className="btn btn-cadastro">Cadastro</button>
                <button className="btn btn-login">Login</button>
            </div>
        </StyledHeader>
    )
}