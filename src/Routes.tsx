import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import Dashboard from "./pages/dashboard/Dashboard";
import { RotaPrivada } from "./pages/layout/rotaPrivada/RotaPrivada";
import Receitas from "./pages/receitas/Receitas";
import Despesas from "./pages/despesas/Despesas";
import Investimentos from "./pages/investimentos/Investimentos";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route element={<RotaPrivada />}>
          <Route path="/sua-carteira" element={<Dashboard />} />
          <Route path="/receitas" element={<Receitas />} />
          <Route path="/despesas" element={<Despesas />} />
          <Route path="/investimentos" element={<Investimentos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
