import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event"; 
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";
import { toast } from "react-toastify";


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
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    const logoElement = screen.getByAltText("Logo da walletLife");
    expect(logoElement).toBeInTheDocument();

    const loginLink = screen.getByText("Login");
    const cadastroLink = screen.getByText("Cadastro");
    expect(loginLink).toBeInTheDocument();
    expect(cadastroLink).toBeInTheDocument();
  });

  test("submits form with valid email and shows success toast", async () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    const emailInput = screen.getByPlaceholderText("Seu email");
    const submitButton = screen.getByText("cadastrar");


    await userEvent.type(emailInput, "test@example.com");
    fireEvent.click(submitButton);


    expect(toast.success).toHaveBeenCalledWith("Seu e-mail foi cadastrado!", {
      position: expect.anything(),
    });


    expect(emailInput).toHaveValue("");
  });

  test("submits form with invalid email and shows warning toast", async () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    const emailInput = screen.getByPlaceholderText("Seu email");
    const submitButton = screen.getByText("cadastrar");


    await userEvent.type(emailInput, "invalid-email");
    fireEvent.click(submitButton);

  
    expect(toast.warning).toHaveBeenCalledWith(
      "É necessário que seu e-mail esteja completo! Exemplo: seuemail@email.com",
      {
        position: expect.anything(),
      }
    );
  });
});