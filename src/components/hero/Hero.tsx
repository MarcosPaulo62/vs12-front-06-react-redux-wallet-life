import { HeroContainer } from "./style";
import HeroImg from "../../assets/hero-img.png";
import { StyledTitle, StyledTag } from "../../styles/typography";

export default function Hero() {
  return (
    <HeroContainer>
      <div className="hero-img-div">
        <img
          src={HeroImg}
          alt="Imagem de uma mulher sorridente e bem vestida sentada à mesa de trabalho, com caderno de notas e um tablet"
        />
      </div>
      <div className="hero-text">
        <StyledTitle fontWeight={700} tag={"h2"} fontSize={"lg"}>
          Suas finanças, nosso compromisso!
        </StyledTitle>
        <StyledTag className="styled-tag">
          Aqui, nós simplificamos o gerenciamento para que você tenha uma vida
          financeira plena!
        </StyledTag>
        <button className="hero-btn">entrar na plataforma!</button>
      </div>
    </HeroContainer>
  );
}
