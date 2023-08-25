import { StyledSpan, StyledTitle } from "../../styles/typography";
import { StyledLoginContainer } from "./style";
import logoDark from "../../assets/logoTextDark.png";
import { StyledButton } from "../../styles/buttons";
import { useForm } from "react-hook-form";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/UserSlice";
import { AppDispatch, RootState } from "../../store";

export interface IFormLogin {
  login: string;
  senha: string;
}

export default function Login() {
  const location = useLocation();
  const email = location.state?.email || "";

  const { register, handleSubmit } = useForm<IFormLogin>({
    defaultValues: { login: email || "" },
  });

  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  function onSubmit(data: IFormLogin) {
    const validateEmail = (email: string) => {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return regex.test(email);
    };

    if (!data.login.trim() || !data.senha.trim()) {
      toast.warning("É necessário preencher todos os campos!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else if (!validateEmail(data.login)) {
      toast.warning(
        "É necessário que seu e-mail esteja completo! Exemplo: seuemail@email.com",
        {
          position: toast.POSITION.TOP_RIGHT,
        }
      );
    } else {
      let userCredentials: IFormLogin = {
        login: data.login,
        senha: data.senha,
      };
      dispatch(loginUser(userCredentials));
    }
  }

  const loginStatus = useSelector((state: RootState) => state.user?.status);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/sua-carteira");
    } else if (loginStatus === "rejected") {
      toast.error("Usuário e/ou senha incorretos", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }, [loginStatus, navigate]);

  const userState = useSelector((state: RootState) => state.user);

  const { loading, error } = userState;

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
          placeholder="seu e-mail"
          {...register("login")}
        />
        <input
          type="password"
          id="password"
          minLength={5}
          maxLength={30}
          placeholder="sua senha"
          {...register("senha")}
        />
        <StyledSpan fontSize="lg">
          Ainda não possui login?{" "}
          <strong>
            <NavLink to={"/cadastro"}>Faça seu cadastro!</NavLink>
          </strong>
        </StyledSpan>
        <StyledButton
          type="submit"
          buttonsize="mdlc"
          buttonstyle="signinSignout"
        >
          {loading ? "logando..." : "logar"}
        </StyledButton>
      </form>
      <ToastContainer />
    </StyledLoginContainer>
  );
}
