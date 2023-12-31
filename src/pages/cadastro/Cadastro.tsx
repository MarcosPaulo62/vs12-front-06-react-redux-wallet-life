import { useEffect, useState } from "react";
import { StyledSpan, StyledTitle } from "../../styles/typography";
import { StyledCadastroContainer } from "./style";
import logoDark from "../../assets/logoTextDark.png";
import { StyledButton } from "../../styles/buttons";
import { useForm } from "react-hook-form";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import { createUser } from "../../store/users/usersSlice";
import { usersSlice } from "../../store/users/usersSlice";
import { useAppDispatch } from "../../store";
import { useSelector } from "react-redux";
import {
  selectCreateSuccess,
  selectErrorOnCreate,
} from "../../store/users/selectors";

export interface IFormCadastro {
  name: string;
  email: string;
  dateBirth: string;
  cpf: string;
  password: string;
}

interface IFormErrors {
  name: boolean;
  email: boolean;
  dateBirth: boolean;
  cpf: boolean;
  password: boolean;
}

export default function Cadastro() {
  const { register, handleSubmit, reset } = useForm<IFormCadastro>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const createSuccess = useSelector(selectCreateSuccess);
  const errorOnCreate = useSelector(selectErrorOnCreate);
  const creatingUser = useSelector(selectCreateSuccess);

  const [emailValue, setEmailValue] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);
  };

  const [inputType, setInputType] = useState<string>('text');

  const handleInputFocus = () => {
    setInputType('date');
  };

  const [formErrors, setFormErrors] = useState<IFormErrors>({
    name: false,
    email: false,
    dateBirth: false,
    cpf: false,
    password: false,
  });

  async function onSubmit(data: IFormCadastro) {
    const validateEmail = (email: string) => {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return regex.test(email);
    };

    const today = new Date();
    const birthDate = new Date(data.dateBirth);

    const newFormErrors: IFormErrors = {
      name: !data.name.trim(),
      email: !data.email.trim() || !validateEmail(data.email),
      dateBirth: !data.dateBirth.trim() || birthDate > today,
      cpf: !data.cpf.trim() || !/^\d+$/.test(data.cpf),
      password: !data.password.trim(),
    };

    setFormErrors(newFormErrors);

    if (
      !data.name.trim() ||
      !data.email.trim() ||
      !data.dateBirth.trim() ||
      !data.cpf.trim() ||
      !data.password.trim()
    ) {
      toast.warning("É necessário preencher todos os campos!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else if (!validateEmail(data.email)) {
      toast.warning(
        "É necessário que seu e-mail esteja completo! Exemplo: seuemail@email.com",
        {
          position: toast.POSITION.TOP_RIGHT,
        }
      );

      return;
    } else if (birthDate > today) {
      toast.warning("A data de nascimento não pode ser no futuro!", {
        position: toast.POSITION.TOP_RIGHT,
      });

      return;
    } else if (!/^\d+$/.test(data.cpf)) {
      toast.warning("CPF inválido! Deve conter apenas números.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      dispatch(
        createUser({
          cpf: data.cpf,
          dataNascimento: data.dateBirth,
          email: data.email,
          nome: data.name,
          senha: data.password,
        })
      );
    }

    if (Object.values(newFormErrors).some((error) => error)) {
      return;
    }
  }

  useEffect(() => {
    if (createSuccess) {
      toast.success("Usuário cadastrado com sucesso!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate("/login", { state: { email: emailValue } });
      reset();

      dispatch(usersSlice.actions.resetCreateSuccess());
    }
  }, [createSuccess]);

  useEffect(() => {
    if (errorOnCreate) {
      toast.error(errorOnCreate, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }, [errorOnCreate]);

  return (
    <StyledCadastroContainer>
      <div className="header">
        <NavLink to={"/"}>
          <img src={logoDark} alt="Logo da Wallet Life" data-testid="logo-link-home"/>
        </NavLink>
        <div>
          <StyledTitle
            className="title"
            fontSize="lg"
            fontWeight={700}
            tag="h1"
          >
            CADASTRO
          </StyledTitle>
        </div>
      </div>

      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <input
          type="text"
          id="name"
          minLength={2}
          maxLength={255}
          {...register("name")}
          placeholder="seu nome completo"
          className={formErrors.name ? "input-error" : ""}
        />
        <input
          type="email"
          id="email"
          minLength={12}
          maxLength={300}
          {...register("email")}
          placeholder="seu e-mail"
          className={formErrors.email ? "input-error" : ""}
          value={emailValue}
          onChange={handleEmailChange}
        />
        <input
          type={inputType}
          id="dateBith"
          {...register("dateBirth")}
          placeholder="data de nascimento"
          className={formErrors.dateBirth ? "input-error" : ""}
          onFocus={handleInputFocus}
        />
        <input
          type="text"
          id="cpf"
          minLength={11}
          maxLength={11}
          {...register("cpf")}
          placeholder="CPF (apenas números)"
          className={formErrors.cpf ? "input-error" : ""}
        />
        <input
          type="password"
          id="password"
          minLength={5}
          maxLength={30}
          {...register("password")}
          placeholder="senha (mínimo 5 caracteres)"
          className={formErrors.password ? "input-error" : ""}
        />
        <StyledSpan fontSize="lg">
          Já possui cadastro?{" "}
          <strong>
            <NavLink to={"/login"}>Faça seu login!</NavLink>
          </strong>
        </StyledSpan>
        <StyledButton
          type="submit"
          buttonsize="mdlc"
          buttonstyle="signinSignout"
        >
          {creatingUser ? "cadastrando..." : "cadastrar"}
        </StyledButton>
      </form>

      <ToastContainer />
    </StyledCadastroContainer>
  );
}
