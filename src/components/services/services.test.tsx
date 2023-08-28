import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import store from "../../store";
import { ColorsTheme } from "../../styles/global";
import Services from "./Services";



describe("RevenuesSectionDashboard", () => {
  it("should render a paragraph element", () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={ColorsTheme}>
          <BrowserRouter>
            <Services />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );

    const paragraphElement = screen.getByText("Conheça nossos serviços!");

    expect(paragraphElement).toBeInTheDocument();
  });
});