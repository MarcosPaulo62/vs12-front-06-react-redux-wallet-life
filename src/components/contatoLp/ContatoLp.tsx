import { StyledTitle } from "../../styles/typography";
import { ContainerContatoLp, FormContatoLP } from "./style";
import { useForm } from "react-hook-form";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { StyledButton } from "../../styles/buttons";
import { useState } from "react";

interface FormData {
  nome: string;
  email: string;
  duvida: string;
}

interface IFormErrorsLp {
  nome: boolean;
  email: boolean;
  duvida: boolean;
}

export default function ContatoLp() {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const [formErrorsLp, setFormErrors] = useState<IFormErrorsLp>({
    nome: false,
    email: false,
    duvida: false,
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    
    const validateEmail = (email: string) => {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return regex.test(email);
    };

    const newFormErrorsLp: IFormErrorsLp = {
      nome: !data.nome.trim(),
      email: !data.email.trim() || !validateEmail(data.email),
      duvida: !data.duvida.trim(),
    };
  
    setFormErrors(newFormErrorsLp);


    if (!data.nome.trim() || !data.email.trim() || !data.duvida.trim()) {
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
    } else {
      toast.success("Sua dúvida foi enviada!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      reset();
    }

    if (Object.values(newFormErrorsLp).some((error) => error)) {
      return;
    } 
  };

  return (
    <ContainerContatoLp>
      <StyledTitle
        className="styled-title"
        fontWeight={700}
        tag={"h2"}
        fontSize={"lg"}
      >
        Ficou com alguma dúvida?
      </StyledTitle>

      <FormContatoLP onSubmit={handleSubmit(onSubmit)}>
        <StyledTitle
          className="styled-title-fale-conosco"
          fontWeight={400}
          fontSize={"lg"}
          tag={"h3"} 
        >
          Fale conosco!
        </StyledTitle>
        <div className="divForm">
          <input
            placeholder="seu nome"
            className={formErrorsLp.nome ? "input input-error" : "input"}
            {...register("nome")}
          />
        </div>
        <div className="divForm">
          <input
            type="email"
            placeholder="seu e-mail"
            className={formErrorsLp.email ? "input input-error" : "input"}
            {...register("email")}
          />
        </div>
        <div className="divForm">
          <textarea
            placeholder="sua dúvida"
            className={formErrorsLp.duvida ? "textarea input-error" : "textarea"}
            {...register("duvida")}
          />
        </div>
        <div>
          <StyledButton buttonsize="sm" buttonstyle="landingPage">
            enviar
          </StyledButton>
        </div>
      </FormContatoLP>
      <ToastContainer />
    </ContainerContatoLp>
  );
}
