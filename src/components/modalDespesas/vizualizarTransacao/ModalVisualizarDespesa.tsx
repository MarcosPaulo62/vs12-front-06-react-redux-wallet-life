import React from "react";
import { StyledButton } from "../../../styles/buttons";
import { StyledSpan, StyledTitle } from "../../../styles/typography";
import { StyledModalContainer, StyledModalViewDespesaContainer } from "./style";
import { useForm } from 'react-hook-form';
import editor from '../../../assets/lapis-editar.svg'

interface ModalViewDespesaProps {
    handleCloseModal: () => void;
}



export default function ModalViewDespesa ({ handleCloseModal }: ModalViewDespesaProps) {

    return(
        
       <StyledModalViewDespesaContainer>
             
            <StyledModalContainer>
                <div>
                    <img src={editor} alt="botão em forma de lapis" />
                    <StyledTitle fontSize="md" fontWeight={700} tag="h3">ADICIONAR TRANSAÇÃO</StyledTitle>
                    <StyledSpan className="close-modal" fontSize="lg" onClick={handleCloseModal}>X</StyledSpan>
                </div>
                <form >                    
                    <input type="number" id="valor" placeholder="Valor" required  />
                    <input type="text" id="descricao" placeholder="Descrição" required />
                    <input type="date" id="data" placeholder="Data" required />
                    <StyledButton buttonsize="mdlp" buttonstyle="landingPage" type="submit">Adicionar</StyledButton>
                </form>                
            </StyledModalContainer>
             
        </StyledModalViewDespesaContainer>
    
        
    )
}
