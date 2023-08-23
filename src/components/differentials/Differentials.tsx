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
          <StyledButton
            buttonsize="lg"
            buttonstyle="landingPage"
            style={{ fontSize: "1.5rem" }}
          >
            faça seu cadastro!
          </StyledButton>
        </Aside>
        <AsideImg>
          <Img src="differential.png" />
        </AsideImg>
      </Section>
    </>
  );
};
