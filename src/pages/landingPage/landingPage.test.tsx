import LandingPage from "./LandingPage";
import { render, screen } from "@testing-library/react";
import { ColorsTheme } from "../../styles/global";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../store";


describe("Testing renders LandignPage components", () => {
  test("renders banner", () => {
    render(
      <Provider store={store}>
            <ThemeProvider theme={ColorsTheme}>
                <BrowserRouter>
                    <LandingPage />
                </BrowserRouter>
            </ThemeProvider>
        </Provider> 
    );

    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  test("renders LandingPage components", () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={ColorsTheme}>
          <BrowserRouter>
            <LandingPage />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );

    const images = screen.getAllByRole("img");
    images.forEach((image) => {
      expect(image).toBeVisible();
    });
  });


  test("renders LandingPage components", () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={ColorsTheme}>
          <BrowserRouter>
            <LandingPage />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );

    const links = screen.getAllByRole("link");
    links.forEach((link) =>{
      expect(link).toBeVisible;
    })

  });
});