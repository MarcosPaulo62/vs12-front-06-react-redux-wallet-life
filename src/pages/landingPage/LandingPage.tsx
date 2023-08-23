import ContatoLp from "../../components/contatoLp/ContatoLp";
import { Differentials } from "../../components/differentials/Differentials";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Services from "../../components/services/Services";
import { ContainerLanding } from "./style";

export default function LandingPage() {
  return (
    <ContainerLanding>
      <Header />
      <Hero />
      <Services />
      <Differentials />
      <ContatoLp />
      <Footer />
    </ContainerLanding>
  );
}
