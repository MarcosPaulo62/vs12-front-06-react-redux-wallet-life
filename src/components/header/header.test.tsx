import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

describe("Header component", () => {
  test("renders logo with correct alt text", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const logoElement = screen.getByAltText(
      "Logo da walletLife, um quadrado preenchido na cor cinza claro, com 4 triangulos menores em cada uma das arestas, sendo um triângulo marrom escuro a direita, outro com a cor khaki abaixo, um marrom claro a esquerda e um último cinza escuro em cima. Abaixo da imagem está escrito walletlife finances."
    );
    expect(logoElement).toBeInTheDocument();
  });

  test("renders Cadastro button with correct text and navigation", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const cadastroButton = screen.getByText("Cadastro");
    expect(cadastroButton).toBeInTheDocument();

    const cadastroNavLink = screen.getByText("Cadastro").closest("a");
    expect(cadastroNavLink).toHaveAttribute("href", "/cadastro");
  });

  test("renders Login button with correct text and navigation", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const loginButton = screen.getByText("Login");
    expect(loginButton).toBeInTheDocument();

    const loginNavLink = screen.getByText("Login").closest("a");
    expect(loginNavLink).toHaveAttribute("href", "/login");
  });
});