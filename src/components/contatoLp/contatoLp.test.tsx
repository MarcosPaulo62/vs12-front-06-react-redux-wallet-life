import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event"; 
import ContatoLp from "./ContatoLp";
import { toast } from "react-toastify";


jest.mock("react-toastify", () => ({
  toast: {
    warning: jest.fn(),
    success: jest.fn(),
  },
  ToastContainer: jest.fn(),
}));

describe("ContatoLp component", () => {
  test("submits form with valid data and shows success toast", async () => {
    render(<ContatoLp />);

    const nomeInput = screen.getByPlaceholderText("seu nome");
    const emailInput = screen.getByPlaceholderText("seu e-mail");
    const duvidaTextarea = screen.getByPlaceholderText("sua dúvida");
    const enviarButton = screen.getByText("enviar");

    await userEvent.type(nomeInput, "John Doe");
    await userEvent.type(emailInput, "test@example.com");
    await userEvent.type(duvidaTextarea, "Minha dúvida é...");
    fireEvent.click(enviarButton);

    expect(toast.success).toHaveBeenCalledWith("Sua dúvida foi enviada!", {
      position: expect.anything(),
    });

    expect(nomeInput).toHaveValue("");
    expect(emailInput).toHaveValue("");
    expect(duvidaTextarea).toHaveValue("");
  });

  test("submits form with missing data and shows warning toast", async () => {
    render(<ContatoLp />);

    const enviarButton = screen.getByText("enviar");
    fireEvent.click(enviarButton);

    expect(toast.warning).toHaveBeenCalledWith(
      "É necessário preencher todos os campos!",
      {
        position: expect.anything(),
      }
    );
  });

  test("submits form with invalid email and shows warning toast", async () => {
    render(<ContatoLp />);

    const emailInput = screen.getByPlaceholderText("seu e-mail");
    const enviarButton = screen.getByText("enviar");

    await userEvent.type(emailInput, "invalid-email");
    fireEvent.click(enviarButton);

    expect(toast.warning).toHaveBeenCalledWith(
      "É necessário que seu e-mail esteja completo! Exemplo: seuemail@email.com",
      {
        position: expect.anything(),
      }
    );
  });

});
