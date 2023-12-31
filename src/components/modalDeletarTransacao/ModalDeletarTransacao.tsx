import { StyledButton } from "../../styles/buttons";
import { StyledTag, StyledTitle } from "../../styles/typography";
import { StyledModalConfirmDeleteContainer } from "./style";
import trash from '../../assets/Restore from trash.svg'

interface ModalDeletarTransacaoProps{
    onConfirm: () => void;
    onClose: () => void;
}

export default function ModalDeletarTransacao ({onConfirm, onClose}: ModalDeletarTransacaoProps) {
    return(
        <StyledModalConfirmDeleteContainer>
            <div>
                <StyledTitle fontSize="lg" fontWeight={700} tag="h3">DELETAR TRANSAÇÃO?</StyledTitle>
                <StyledTag>Você tem certeza que quer deletar esta transação? (esta ação não poderá ser desfeita!)</StyledTag>
                <div>
                    <StyledButton buttonsize="mdlp" buttonstyle="landingPage" onClick={() => onClose()}>cancelar</StyledButton> 
                    <StyledButton className="btn-delete" buttonsize="mdlp" buttonstyle="landingPage" onClick={() => onConfirm()}>deletar transação <img src={trash} alt="imagem de um cesto de lixo" /></StyledButton>
                </div>
            </div>
        </StyledModalConfirmDeleteContainer>
    )
}