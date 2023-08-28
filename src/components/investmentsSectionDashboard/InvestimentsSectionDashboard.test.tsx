import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import store from "../../store";
import { ColorsTheme } from "../../styles/global";
import InvestmentsSectionDashboard from "./InvestmentsSectionDashboard";


describe("RevenuesSectionDashboard", () => {
  it("should render a paragraph element", () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={ColorsTheme}>
          <BrowserRouter>
            <InvestmentsSectionDashboard handleOpenModal={function (): void {
                        throw new Error("Function not implemented.");
                    } } />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );

    const paragraphElement = screen.getByText("INVESTIMENTOS");

    expect(paragraphElement).toBeInTheDocument();
  });
});
