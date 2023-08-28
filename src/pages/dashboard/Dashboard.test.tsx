import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { ColorsTheme } from "../../styles/global";
import store from "../../store";
import Dashboard from "./Dashboard";

describe("cadastro Test", () => {
  test("Should render logo", () => {
    render(
        <Provider store={store}>
            <ThemeProvider theme={ColorsTheme}>
                <BrowserRouter>
                    <Dashboard />
                </BrowserRouter>
            </ThemeProvider>
        </Provider>    
    );

    expect(screen.getByTestId("logo-link-home")).toBeInTheDocument();
  });

});
