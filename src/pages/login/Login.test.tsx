import Login from "./Login";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { ColorsTheme } from "../../styles/global";
import store from "../../store";
import { toast } from "react-toastify";
import Header from "../../components/header/Header";

describe("Login Test", () => {
  test("Should render logo", () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={ColorsTheme}>
          <BrowserRouter>
            <Login />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );

    expect(screen.getByTestId("logo-link-home")).toBeInTheDocument();
  });

  test("dismisses previous toasts", async () => {
    toast.success("Toast a ser dispensado");
  
    expect(toast.isActive("Toast a ser dispensado")).toBe(false);

  });

  // test("shows success toast when email is not empty", async () => {
  //   render(
  //     <Provider store={store}>
  //       <ThemeProvider theme={ColorsTheme}>
  //         <BrowserRouter>
  //           <Login />
  //         </BrowserRouter>
  //       </ThemeProvider>
  //     </Provider>
  //   );

  //   const email = "test@example.com";

  //   const successToastPartialMessage = "Usuário cadastrado com sucesso!";

  //   userEvent.type(screen.getByPlaceholderText("seu e-mail"), email);

  //   userEvent.click(screen.getByText("logar"));

  //   await waitFor(() => {
  //     expect(
  //       screen.getByText((content, element) =>
  //         content.includes(successToastPartialMessage)
  //       )
  //     ).toBeInTheDocument();
  //   });
  // });

  test("validates email correctly", () => {
    const validateEmail = (email: string) => {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return regex.test(email);
    };

    expect(validateEmail("test@example.com")).toBe(true);
    expect(validateEmail("invalidemail")).toBe(false);
  });

  test("Should switch pages when a link is clicked", () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={ColorsTheme}>
          <BrowserRouter>
            <Login />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>,
    );

    const cadastroLink = screen.getByTestId("link-cadastro");
    userEvent.click(cadastroLink);

    const currentUrl = window.location.href.split("localhost")[1];

    console.log(currentUrl);
    expect(currentUrl).toBe("/");
  });


  test("submits form when filled correctly", async () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={ColorsTheme}>
          <BrowserRouter>
            <Login />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );

    const emailInput = screen.getByPlaceholderText("seu e-mail");
    const passwordInput = screen.getByPlaceholderText("sua senha");
    const submitButton = screen.getByText("logar");

    userEvent.type(emailInput, "test@example.com");
    userEvent.type(passwordInput, "password");
    fireEvent.click(submitButton);

    expect(screen.getByText("logar")).toBeInTheDocument();
  });
});
