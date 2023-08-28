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


