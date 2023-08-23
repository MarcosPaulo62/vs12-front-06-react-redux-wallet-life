import { StyledSpan, StyledTitle } from "../../styles/typography";
import { StyledLoginContainer } from "./style";
import logoDark from "../../assets/logoTextDark.png";
import { StyledButton } from "../../styles/buttons";
import { useForm } from "react-hook-form";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { NavLink } from "react-router-dom";

export interface IFormLogin {
  email: string;
  password: string;
}

export default function Login() {
  const { register, handleSubmit } = useForm<IFormLogin>();

  function onSubmit(data: IFormLogin) {
    console.log(data);

    if (!data.email.trim() || !data.password.trim()) {
      toast.warning("É necessário preencher todos os campos!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

    // toast.error('Usuário e/ou senha incorretos', {
    //     position: toast.POSITION.TOP_RIGHT
    // });
  }

  return (
    <StyledLoginContainer>
      <div className="header">
        <NavLink to={"/"}>
          <img src={logoDark} alt="Logo da Wallet Life" />
        </NavLink>
        <div>
          <StyledTitle
            className="title"
            fontSize="lg"
            fontWeight={700}
            tag="h1"
          >
            LOGIN
          </StyledTitle>
        </div>
      </div>

      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <input
          type="email"
          id="email"
          minLength={12}
          maxLength={255}
          {...register("email")}
          placeholder="seu e-mail"
        />
        <input
          type="password"
          id="password"
          minLength={5}
          maxLength={30}
          {...register("password")}
          placeholder="sua senha"
        />
        <StyledSpan fontSize="lg">
          Ainda não possui login? <strong><NavLink to={"/cadastro"}>Faça seu cadastro!</NavLink></strong>
        </StyledSpan>
        <StyledButton
          type="submit"
          buttonsize="mdlc"
          buttonstyle="signinSignout"
        >
          logar
        </StyledButton>
      </form>

      <ToastContainer />
    </StyledLoginContainer>
  );
}
