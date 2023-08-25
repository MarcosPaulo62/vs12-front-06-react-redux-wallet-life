import ThemeProvider from "styled-components/dist/models/ThemeProvider";
import LandingPage from "./LandingPage";
import { render, screen } from "@testing-library/react";
import { ColorsTheme } from "../../styles/global";

describe("Testing renders LandignPage components", () => {
  test("renders banner", () => {
    render(
      <ThemeProvider theme={ColorsTheme}>
        <LandingPage />
      </ThemeProvider>
    );

    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  test("renders LandingPage components", () => {
    render(<LandingPage />);

    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  test("renders LandingPage components", () => {
    render(<LandingPage />);

    expect(screen.getByRole("complementary")).toBeInTheDocument();
  });

  test("renders LandingPage components", () => {
    render(<LandingPage />);

    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});
