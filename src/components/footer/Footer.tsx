import { StyledFooterContainer } from "./style";
import logo from "../../assets/logo-WALLETLIFE.png";
import { StyledTag } from "../../styles/typography";
import { StyledButton } from "../../styles/buttons";
import { useForm, SubmitHandler } from "react-hook-form";
import { NavLink } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useState } from "react";

type FormData = {
  email: string;
};

interface IFormErrosFooter {
  email: boolean;
}

export default function Footer() {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const [formErrorsFooter, setFormErrors] = useState<IFormErrosFooter>({
    email: false,
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const validateEmail = (email: string) => {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return regex.test(email);
    };

    const newFormErrorsFooter: IFormErrosFooter = {
      email: !data.email.trim() || !validateEmail(data.email),
    };

    setFormErrors(newFormErrorsFooter);

    if (!validateEmail(data.email)) {
      toast.warning(
        "É necessário que seu e-mail esteja completo! Exemplo: seuemail@email.com",
        {
          position: toast.POSITION.TOP_RIGHT,
        }
      );
    } else {
      toast.success("Seu e-mail foi cadastrado!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      reset();
    }

    if (Object.values(newFormErrorsFooter).some((error) => error)) {
      return;
    }
  };

  return (
    <StyledFooterContainer>
      <div className="left-section">
        <img src={logo} alt="" />
        <NavLink className="login" to={"/login"}>
          Login
        </NavLink>
        <NavLink className="cadastro" to={"/cadastro"}>
          Cadastro
        </NavLink>
      </div>
      <div className="right-section">
        <StyledTag className="paragraphy">
          Assine gratuitamente nossa newsletter e fique por dentro das nossas
          dicas sobre finanças!
        </StyledTag>
        <div>
          <form className="styled-input" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              className={formErrorsFooter.email ? "input input-error" : "input"}
              {...register("email")}
              placeholder="Seu email"
            />

            <StyledButton buttonsize="sm" buttonstyle="landingPage">
              cadastrar
            </StyledButton>
            <ToastContainer />
          </form>
        </div>
      </div>
    </StyledFooterContainer>
  );
}
