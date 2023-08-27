import React, { useEffect, useState } from "react";
import { StyledButton } from "../../styles/buttons";
import { StyledSpan, StyledTitle } from "../../styles/typography";
import { StyledModalContainer, StyledModalMeusDadosContainer } from "./style";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../store";
import { useSelector } from "react-redux";
import { selectUserLogged } from "../../store/users/selectors";
import { UserLogged, UserLoggedSlice } from "../../store/users/UserLoggedSlice";
import { PencilSimple, Trash } from "@phosphor-icons/react";

interface ModalAddDespesaProps {
  handleCloseModal: () => void;
}

interface UserFormData {
  nome: string;
  dataNascimento: number;
  cpf: string;
  email: string;
  senha: string;
}

interface ModalMeusDadosProps{
    closeModal: () => void;
}

export default function ModalMeusDados({ closeModal }: ModalMeusDadosProps) {
  const { register, handleSubmit, reset } = useForm<UserFormData>();

  const dispatch = useAppDispatch();
  const userLogged = useSelector(selectUserLogged);

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    dispatch(UserLoggedSlice.actions.resetUserLogged());
    dispatch(UserLogged({}));
  }, []);

  const onSubmit = (data: UserFormData) => {
    console.log("Dados capturados:", data);
    const transactions = JSON.parse(
      localStorage.getItem("transactions") || "[]"
    ) as UserFormData[];
    transactions.push(data);
    localStorage.setItem("transactions", JSON.stringify(transactions));

    reset();
  };

  return (
    <StyledModalMeusDadosContainer>
      <StyledModalContainer>
        <div>
          <StyledSpan className="close-modal" fontSize="lg">
            <PencilSimple size={32} weight="bold" onClick={() => setIsEditing(!isEditing)}/>
          </StyledSpan>
          <StyledTitle fontSize="md" fontWeight={700} tag="h3">
            VISUALIZAR DADOS
          </StyledTitle>
          <StyledSpan onClick={() => closeModal()} className="close-modal" fontSize="lg">
            X
          </StyledSpan>
        </div>
        <form onSubmit={handleSubmit((data) => onSubmit(data))}>
          <input
            type="text"
            id="nome"
            placeholder="nome"
            required
            {...register("nome")}
            defaultValue={userLogged.nome}
            disabled={!isEditing}
          />
          <input
            type="Date"
            id="dataNascimento"
            placeholder="Data de nascimento"
            required
            {...register("dataNascimento")}
            defaultValue={userLogged.dataNascimento}
            disabled={true}
          />
          <input
            type="text"
            id="cpf"
            placeholder="CPF"
            required
            {...register("cpf")}
            defaultValue={userLogged.cpf}
            disabled={true}
          />
          <input
            type="email"
            id="email"
            placeholder="E-mail"
            required
            {...register("email")}
            defaultValue={userLogged.email}
            disabled={!isEditing}
          />
          <input
              type="password"
              id="senha"
              placeholder="Senha"
              required
              {...register("senha")}
              disabled={!isEditing}
          />
          <div className="buttons">
            <button onClick={() => closeModal()}>fechar</button>
            <button className="delete">deletar conta <Trash size={32} weight="bold" /></button>
          </div>
        </form>
      </StyledModalContainer>
    </StyledModalMeusDadosContainer>
  );
}
