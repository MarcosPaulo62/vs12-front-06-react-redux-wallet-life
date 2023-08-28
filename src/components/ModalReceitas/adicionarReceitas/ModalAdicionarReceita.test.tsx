import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import ModalAddReceita from "./ModalAdicionarReceita";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ColorsTheme } from "../../../styles/global";
import store from "../../../store";

test("renders ModalAddReceita component", () => {
  render(
    <Provider store={store}>
      <ThemeProvider theme={ColorsTheme}>
        <BrowserRouter>
          <ModalAddReceita handleCloseModal={() => {}} />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
});

test("submits form with valid data", async () => {
  const handleCloseModal = jest.fn();
  const { getByLabelText, getByText } = render(
    <Provider store={store}>
      <ThemeProvider theme={ColorsTheme}>
        <BrowserRouter>
          <ModalAddReceita handleCloseModal={handleCloseModal} />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );

  const valorInput = screen.getByPlaceholderText("Valor (R$)");
  const descricaoInput = screen.getByPlaceholderText("Descrição");
  const empresaInput = screen.getByPlaceholderText("Empresa");
  const bancoInput = screen.getByPlaceholderText("Banco");
  const addButton = screen.getByText("Adicionar");

  fireEvent.change(valorInput, { target: { value: "100" } });
  fireEvent.change(descricaoInput, { target: { value: "Teste Descrição" } });
  fireEvent.change(empresaInput, { target: { value: "Empresa Teste" } });
  fireEvent.change(bancoInput, { target: { value: "Banco Teste" } });
  fireEvent.click(addButton);

  await waitFor(() => {
    expect(handleCloseModal).toHaveBeenCalled();
  });
});

test("shows warning toast when submitting form with empty fields", async () => {
  const { getByText } = render(
    <Provider store={store}>
      <ThemeProvider theme={ColorsTheme}>
        <BrowserRouter>
          <ModalAddReceita handleCloseModal={() => {}} />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
  const addButton = screen.getByText("Adicionar");

  fireEvent.click(addButton);

  await waitFor(() => {
    const warningToast = screen.getByText(
      "É necessário preencher todos os campos!"
    );
    expect(warningToast).toBeInTheDocument();
  });
});


