import React, { useEffect, useState } from "react";
import { StyledButton } from "../../styles/buttons";
import { StyledSpan, StyledTitle } from "../../styles/typography";
import { StyledModalContainer, StyledModalMeusDadosContainer } from "./style";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../store";
import { useSelector } from "react-redux";
import { selectUserLogged } from "../../store/users/selectors";
import { UserLogged, UserLoggedSlice } from "../../store/users/UserLoggedSlice";
import { CheckCircle, PencilSimple, Trash } from "@phosphor-icons/react";
import { DeleteUser } from "../../store/users/DeleteUser";
import ModalDeletarUsuario from "../modalDeletarUsuario/ModalDeletarUsuario";
import { useNavigate } from "react-router-dom";
import { User } from "../../model";
import { updateUser } from "../../store/users/async-actions/update-user";
import { ToastContainer, toast } from "react-toastify";

interface ModalAddDespesaProps {
  handleCloseModal: () => void;
}

interface ModalMeusDadosProps{
    closeModal: () => void;
}

export default function ModalMeusDados({ closeModal }: ModalMeusDadosProps) {
  const { register, handleSubmit, reset } = useForm<User>();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const userLogged = useSelector(selectUserLogged);
  
  const [deleteUser, setDeleteUser] = useState<Boolean>(false);

  useEffect(() => {
    if(deleteUser){
        dispatch(
          DeleteUser({idUser: userLogged.idUsuario})
        )
        localStorage.removeItem("user");
        navigate("/");
    }
  }, [deleteUser])

  const [showModalDelete, setShowModalDelete] = useState<Boolean>(false);

  useEffect(() => {
    reset({
      nome: userLogged.nome,
      dataNascimento: userLogged.dataNascimento,
      cpf: (userLogged.cpf).toString(),
      email: userLogged.email,
    });
  }, [userLogged, reset]);

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    dispatch(UserLoggedSlice.actions.resetUserLogged());
    dispatch(UserLogged({}));
  }, []);

  const onSubmit = async (data: User) => {
    data.idUsuario = userLogged.idUsuario;
    await dispatch(updateUser(data));
    dispatch(UserLoggedSlice.actions.resetUserLogged());
    dispatch(UserLogged({}));
    setIsEditing(false)
    toast.success("Dados atualizados com sucesso!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  function deletarUsuario(){
    setDeleteUser(true);
  }

  return (
    <StyledModalMeusDadosContainer>
      {
        showModalDelete && <ModalDeletarUsuario onClose={() => setShowModalDelete(false)} onConfirm={() => deletarUsuario()} />
      }
      <StyledModalContainer>
        <div>
          {isEditing ? 
            <StyledSpan style={{ visibility: "hidden" }} className="close-modal" fontSize="lg">
                <CheckCircle className="check-circle" weight="fill"/>
            </StyledSpan>     
            :
            <StyledSpan className="close-modal" fontSize="lg">
                <PencilSimple className="pencil" weight="bold" onClick={() => setIsEditing(!isEditing)}/>
            </StyledSpan>
          }
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
              placeholder="Nova senha"
              required
              {...register("senha")}
              disabled={!isEditing}
          />
          <div className="buttons">
            {isEditing ? 
                <button type="submit">concluir</button>    
                :
                <button onClick={() => closeModal()}>fechar</button>
            }
            <button type="button" className="delete" onClick={() => setShowModalDelete(true)}>deletar conta <Trash size={32} weight="bold" /></button>
          </div>
        </form>
      </StyledModalContainer>
      <ToastContainer />
    </StyledModalMeusDadosContainer>
  );
}
