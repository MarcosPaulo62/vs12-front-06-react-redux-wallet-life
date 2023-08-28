import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import store from "../../store";
import { ColorsTheme } from "../../styles/global";
import PrincipalSectionDashboard from "./PrincipalSectionDashboard";


describe("RevenuesSectionDashboard", () => {
  it("should render a paragraph element", () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={ColorsTheme}>
          <BrowserRouter>
            <PrincipalSectionDashboard />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );

    const paragraphElement = screen.getByText("SUAS RECEITAS");

    expect(paragraphElement).toBeInTheDocument();
  });
});