import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import store from "../../store";
import { ColorsTheme } from "../../styles/global";

describe("Header component", () => {
  test("renders logo with correct alt text", () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={ColorsTheme}>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );

    const logoElement = screen.getByAltText(
      "Logo da walletLife, um quadrado preenchido na cor cinza claro, com 4 triangulos menores em cada uma das arestas, sendo um triângulo marrom escuro a direita, outro com a cor khaki abaixo, um marrom claro a esquerda e um último cinza escuro em cima. Abaixo da imagem está escrito walletlife finances."
    );
    expect(logoElement).toBeInTheDocument();
  });

  test("renders Cadastro button with correct text and navigation", () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={ColorsTheme}>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );

    const cadastroButton = screen.getByText("Cadastro");
    expect(cadastroButton).toBeInTheDocument();

    const cadastroNavLink = screen.getByText("Cadastro").closest("a");
    expect(cadastroNavLink).toHaveAttribute("href", "/cadastro");
  });

  test("renders Login button with correct text and navigation", () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={ColorsTheme}>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );

    const loginButton = screen.getByText("Login");
    expect(loginButton).toBeInTheDocument();

    const loginNavLink = screen.getByText("Login").closest("a");
    expect(loginNavLink).toHaveAttribute("href", "/login");
  });
});
