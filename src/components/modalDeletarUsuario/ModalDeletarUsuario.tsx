import { StyledButton } from "../../styles/buttons";
import { StyledTag, StyledTitle } from "../../styles/typography";
import { StyledModalConfirmDeleteContainer } from "./style";
import trash from '../../assets/Restore from trash.svg'

interface ModalDeletarUsuarioProps{
    onConfirm: () => void;
    onClose: () => void;
}

export default function ModalDeletarUsuario ({onConfirm, onClose}: ModalDeletarUsuarioProps) {
    return(
        <StyledModalConfirmDeleteContainer>
            <div>
                <StyledTitle fontSize="lg" fontWeight={700} tag="h3">DELETAR CONTA?</StyledTitle>
                <StyledTag>Você tem certeza que quer deletar sua conta? (esta ação não poderá ser desfeita!)</StyledTag>
                <div>
                    <StyledButton buttonsize="mdlp" buttonstyle="landingPage" onClick={() => onClose()}>cancelar</StyledButton> 
                    <StyledButton className="btn-delete" buttonsize="mdlp" buttonstyle="landingPage" onClick={() => onConfirm()}>deletar conta <img src={trash} alt="imagem de um cesto de lixo" /></StyledButton>
                </div>
            </div>
        </StyledModalConfirmDeleteContainer>
    )
}