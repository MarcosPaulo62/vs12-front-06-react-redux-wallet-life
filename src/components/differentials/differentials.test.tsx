import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Differentials from "./Differentials";

const mockLocalStorage = {
  getItem: jest.fn(),
};
global.localStorage = mockLocalStorage;

describe("Differentials component", () => {
  test("renders all topics with correct titles and captions", () => {
    render(
      <BrowserRouter>
        <Differentials />
      </BrowserRouter>
    );

    const topics = screen.getAllByTestId("differential-topic");
    expect(topics).toHaveLength(4);

    expect(screen.getByText("100 K")).toBeInTheDocument();
    expect(screen.getByText("Clientes")).toBeInTheDocument();

    expect(screen.getByText("98%")).toBeInTheDocument();
    expect(screen.getByText("Clientes satisfeitos")).toBeInTheDocument();

    expect(screen.getByText("83%")).toBeInTheDocument();
    expect(screen.getByText("Crescimento anual")).toBeInTheDocument();

    expect(screen.getByText("+100 B")).toBeInTheDocument();
    expect(screen.getByText("Valor gerenciado")).toBeInTheDocument();
  });

  test("renders 'Acesse sua área!' button with correct link", () => {
    render(
      <BrowserRouter>
        <Differentials />
      </BrowserRouter>
    );

    const acesseButton = screen.getByText("acesse sua área!");
    expect(acesseButton).toBeInTheDocument();

    const expectedLink = mockLocalStorage.getItem("user")
      ? "/sua-carteira"
      : "/login";
    expect(acesseButton.closest("a")).toHaveAttribute("href", expectedLink);
  });

});