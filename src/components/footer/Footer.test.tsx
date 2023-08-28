import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";
import { toast } from "react-toastify";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import store from "../../store";
import { ColorsTheme } from "../../styles/global";

jest.mock("react-toastify", () => ({
  toast: {
    warning: jest.fn(),
    success: jest.fn(),
  },
  ToastContainer: jest.fn(),
}));

describe("Footer component", () => {
  test("renders logo and navigation links", () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={ColorsTheme}>
          <BrowserRouter>
            <Footer />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );

    expect(screen.getByTestId("logo-link-home")).toBeInTheDocument(); 
    expect(screen.getByTestId("paragraphy")).toBeInTheDocument();
   

    
  });


});
