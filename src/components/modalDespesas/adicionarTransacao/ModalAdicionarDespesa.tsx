import React from "react";
import { StyledButton } from "../../../styles/buttons";
import { StyledSpan, StyledTitle } from "../../../styles/typography";
import { StyledModalContainer, StyledModalDespesaContainer } from "./style";
import { useForm } from 'react-hook-form';

interface ModalAddDespesaProps {
    handleCloseModal: () => void;
}

interface TransactionFormData {
    tipoDespesa: string;
    valor: number;
    descricao: string;
    data: string;
}

export default function ModalAddDespesa ({ handleCloseModal }: ModalAddDespesaProps) {
    const { register, handleSubmit, reset } = useForm<TransactionFormData>();
    

    const onSubmit = (data: TransactionFormData) => {

        console.log('Dados capturados:', data);
        const transactions = JSON.parse(localStorage.getItem('transactions') || '[]') as TransactionFormData[];
        transactions.push(data);
        localStorage.setItem('transactions', JSON.stringify(transactions));      
        
        
        reset();
    };

    return(
        
       <StyledModalDespesaContainer>
             
            <StyledModalContainer>
                <div>
                    <StyledTitle fontSize="md" fontWeight={700} tag="h3">ADICIONAR TRANSAÇÃO</StyledTitle>
                    <StyledSpan className="close-modal" fontSize="lg" onClick={handleCloseModal}>X</StyledSpan>
                </div>
                <form onSubmit={handleSubmit((data) => onSubmit(data))}>
                    <select id="tipoDespesa"  required {...register("tipoDespesa")}>
                        <option className="opt" value="" disabled selected>Tipo de despesa</option>
                        <option className="opt" value="Única">Única</option>
                        <option className="opt" value="Recorrente">Recorrente</option>
                    </select>
                    <input type="number" id="valor" placeholder="Valor" required {...register("valor")} />
                    <input type="text" id="descricao" placeholder="Descrição" required {...register("descricao")} />
                    <input type="date" id="data" placeholder="Data" required {...register("data")}/>
                    <StyledButton buttonsize="mdlp" buttonstyle="landingPage" type="submit">Adicionar</StyledButton>
                </form>                
            </StyledModalContainer>
             
        </StyledModalDespesaContainer>
    
        
    )
}
