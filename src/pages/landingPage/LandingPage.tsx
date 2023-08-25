import ContatoLp from "../../components/contatoLp/ContatoLp";
import DifferentialsInNumbers from "../../components/differentials/DifferentialsInNumbers";
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
      <DifferentialsInNumbers />
      <ContatoLp />
      <Footer />
    </ContainerLanding>
  );
}
