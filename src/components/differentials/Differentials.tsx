import { NavLink } from "react-router-dom";
import { StyledButton } from "../../styles/buttons";
import {
  Aside,
  AsideImg,
  Caption,
  Container,
  Img,
  Section,
  Title,
  Topic,
} from "./style";

export const Differentials = () => {
  return (
    <>
      <Section>
        <Aside>
          <Container>
            <Topic>
              <Title>100 K</Title>
              <Caption>Clientes</Caption>
            </Topic>
            <Topic>
              <Title>98%</Title>
              <Caption>Clientes satisfeitos</Caption>
            </Topic>
            <Topic>
              <Title>83%</Title>
              <Caption>Crescimento anual</Caption>
            </Topic>
            <Topic>
              <Title>+100 B</Title>
              <Caption>Valor gerenciado</Caption>
            </Topic>
          </Container>
          <NavLink to={(localStorage.getItem("user"))? "/sua-carteira" : "/login"}>
            <StyledButton
              buttonsize="lg"
              buttonstyle="landingPage"
              style={{ fontSize: "1.5rem" }}
            >
              acesse sua área!
            </StyledButton>
          </NavLink>
        </Aside>
        <AsideImg>
          <Img src="differential.png" />
        </AsideImg>
      </Section>
    </>
  );
};
