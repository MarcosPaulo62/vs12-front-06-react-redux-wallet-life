import { ThemeProvider } from "styled-components";
import LandingPage from "./LandingPage";
import { render, screen } from "@testing-library/react";
import { ColorsTheme } from "../../styles/global";
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

  test("renders LandingPage Components", () => {
    render(<Provider store={store}>
      <ThemeProvider theme={ColorsTheme}>
          <BrowserRouter>
              <LandingPage />
          </BrowserRouter>
      </ThemeProvider>
  </Provider>  );

  });
});