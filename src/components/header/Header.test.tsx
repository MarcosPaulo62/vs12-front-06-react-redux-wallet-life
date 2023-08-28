import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import store from "../../store";
import { ColorsTheme } from "../../styles/global";

test("renders Header component", () => {
  render(
    <Provider store={store}>
      <ThemeProvider theme={ColorsTheme}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
});

test("renders logo in Header", () => {
  const { getByAltText } = render(
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

test("renders 'Cadastro' button in Header", () => {
  const { getByText } = render(
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
});

test("renders 'Login' button in Header", () => {
  const { getByText } = render(
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
});
