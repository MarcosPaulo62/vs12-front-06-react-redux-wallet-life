import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import store from "./store";
import { ColorsTheme } from "./styles/global";

describe("App", () => {
  it("renders the Router component", () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={ColorsTheme}>
            <App />
        </ThemeProvider>
      </Provider>
    );

    const paragraphElement = screen.getByText("Suas finanças, nosso compromisso!");

    expect(paragraphElement).toBeInTheDocument();
  });
});
