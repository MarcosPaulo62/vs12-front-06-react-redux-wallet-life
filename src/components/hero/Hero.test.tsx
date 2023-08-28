import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Hero from "./Hero";
import { Provider } from "react-redux";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import store from "../../store";
import { ColorsTheme } from "../../styles/global";

test("renders Hero component", () => {
  render(<Provider store={store}>
    <ThemeProvider theme={ColorsTheme}>
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>);
})

test("clicking NavLink redirects to correct route", () => {
    const { getByText } = render(
        <Provider store={store}>
        <ThemeProvider theme={ColorsTheme}>
          <BrowserRouter>
            <Hero />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );
  
    const linkElement = screen.getByText("entrar na plataforma!");
    fireEvent.click(linkElement);
  
    // You can add assertion here to check if the redirection is happening correctly
  })