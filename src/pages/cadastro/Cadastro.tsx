import { StyledSpan, StyledTitle } from "../../styles/typography";
import { StyledCadastroContainer } from "./style";
import logoDark from "../../assets/logoTextDark.png";
import { StyledButton } from "../../styles/buttons";
import { useForm } from "react-hook-form";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export interface IFormCadastro {
  name: string;
  email: string;
  dateBirth: string;
  cpf: string;
  password: string;
}

export default function Cadastro() {
  const { register, handleSubmit, reset } = useForm<IFormCadastro>();

  function onSubmit(data: IFormCadastro) {
    const validateEmail = (email: string) => {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
      return regex.test(email);
    };

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
    } else if (!/^\d+$/.test(data.cpf)) {
      toast.warning("CPF inválido! Deve conter apenas números.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else if (!validateEmail(data.email)) {
      toast.warning(
        "É necessário que seu e-mail esteja completo! Exemplo: seuemail@email.com",
        {
          position: toast.POSITION.TOP_RIGHT,
        }
      );
    } else {
      const today = new Date();
      const birthDate = new Date(data.dateBirth);

      if (birthDate > today) {
        toast.warning("A data de nascimento não pode ser no futuro!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        toast.success("Cadastro realizado com sucesso!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        console.log(data);
        reset();
      }
    }
  }

  return (
    <StyledCadastroContainer>
      <div className="header">
        <img src={logoDark} alt="Logo da Wallet Life" />
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
        />
        <input
          type="email"
          id="email"
          minLength={12}
          maxLength={300}
          {...register("email")}
          placeholder="seu e-mail"
        />
        <input
          type="date"
          id="dateBith"
          {...register("dateBirth")}
          placeholder="data de nascimento"
        />
        <input
          type="text"
          id="cpf"
          minLength={11}
          maxLength={11}
          {...register("cpf")}
          placeholder="CPF (apenas números)"
        />
        <input
          type="password"
          id="password"
          minLength={5}
          maxLength={30}
          {...register("password")}
          placeholder="senha (mínimo 5 caracteres)"
        />
        <StyledSpan fontSize="lg">
          Já possui cadastro? <strong>Faça seu login!</strong>
        </StyledSpan>
        <StyledButton
          type="submit"
          buttonsize="mdlc"
          buttonstyle="signinSignout"
        >
          cadastrar
        </StyledButton>
      </form>

      <ToastContainer />
    </StyledCadastroContainer>
  );
}
