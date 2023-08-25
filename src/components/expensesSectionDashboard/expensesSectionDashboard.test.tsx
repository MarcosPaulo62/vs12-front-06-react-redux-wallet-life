import { render, screen } from "@testing-library/react";
import ExpensesSectionDashboard from "./ExpensesSectionDashboard";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import store from "../../store";
import { ColorsTheme } from "../../styles/global";

describe("ExpensesSectionDashboard component", () => {
  test("renders section title", () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={ColorsTheme}>
          <BrowserRouter>
            <ExpensesSectionDashboard />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );

    const sectionTitle = screen.getByText("DESPESAS");
    expect(sectionTitle).toBeInTheDocument();
  });

  test("renders total expenses value", () => {
    render(<ExpensesSectionDashboard />);

    const totalValue = screen.getByText("R$ -800,00");
    expect(totalValue).toBeInTheDocument();
  });

  test("renders search input", () => {
    render(<ExpensesSectionDashboard />);

    const searchInput = screen.getByPlaceholderText("busque uma despesa");
    expect(searchInput).toBeInTheDocument();
  });
});
