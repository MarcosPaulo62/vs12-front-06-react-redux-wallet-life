import Login from "./Login";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { ColorsTheme } from "../../styles/global";
import store from "../../store";

describe("Login Test", () => {
  test("Should render logoqwwwwwwwwwwwwwwwwwwwwww", () => {
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

//   test("Should switch pages when a link is clicked", async () => {
//     render(<Header />, { wrapper: BrowserRouter });

//     const contatoLink = screen.getByTestId("contato-link");
//     await userEvent.click(contatoLink);

//     const currentUrl = window.location.href.split("localhost")[1];

//     console.log(currentUrl);
//     expect(currentUrl).toBe("/contato");
//   });
});
