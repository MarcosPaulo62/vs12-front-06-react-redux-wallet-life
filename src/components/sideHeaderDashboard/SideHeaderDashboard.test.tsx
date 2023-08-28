import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { ColorsTheme } from "../../styles/global";
import store from "../../store";
import SideHeader from "./SideHeaderDashboard";

describe("Side Header Test", () => {
  test("Should render logo", () => {
    render(
        <Provider store={store}>
            <ThemeProvider theme={ColorsTheme}>
                <BrowserRouter>
                    <SideHeader />
                </BrowserRouter>
            </ThemeProvider>
        </Provider>    
    );

    expect(screen.getByTestId("logo-link-home")).toBeInTheDocument();
  });

  test("Should render exit", () => {
    render(
        <Provider store={store}>
            <ThemeProvider theme={ColorsTheme}>
                <BrowserRouter>
                    <SideHeader />
                </BrowserRouter>
            </ThemeProvider>
        </Provider>    
    );

    expect(screen.getByTestId("exit")).toBeInTheDocument();
  });

  

});
