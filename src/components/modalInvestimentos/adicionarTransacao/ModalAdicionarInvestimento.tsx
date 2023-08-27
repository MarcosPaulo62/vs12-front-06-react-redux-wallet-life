import React from "react";
import { StyledButton } from "../../../styles/buttons";
import { StyledSpan, StyledTitle } from "../../../styles/typography";
import { StyledModalContainer, StyledModalInvestimentoContainer } from "./style";
import { useForm } from 'react-hook-form';

interface ModalAddInvestimentoProps {
    handleCloseModal: () => void;
}

interface TransactionFormData {
    tipoInvestimento: string;
    valor: number;
    descricao: string;
    corretora: string;
    data: string;
}

export default function ModalAddInvestimento ({ handleCloseModal }: ModalAddInvestimentoProps) {
    const { register, handleSubmit, reset } = useForm<TransactionFormData>();
    

    const onSubmit = (data: TransactionFormData) => {

        console.log('Dados capturados:', data);
        const transactions = JSON.parse(localStorage.getItem('transactions') || '[]') as TransactionFormData[];
        transactions.push(data);
        localStorage.setItem('transactions', JSON.stringify(transactions));      
        
        
        reset();
    };

    return(
        
       <StyledModalInvestimentoContainer>
             
            <StyledModalContainer>
                <div>
                    <StyledTitle fontSize="md" fontWeight={700} tag="h3">ADICIONAR TRANSAÇÃO</StyledTitle>
                    <StyledSpan className="close-modal" fontSize="lg" onClick={handleCloseModal}>X</StyledSpan>
                </div>
                <form onSubmit={handleSubmit((data) => onSubmit(data))}>
                    <select id="tipoInvestimento"  required {...register("tipoInvestimento")}>
                        <option className="opt" value="" disabled selected>Tipo de investimento</option>
                        <option className="opt" value="Renda fixa">Renda fixa</option>
                        <option className="opt" value="Renda variável">Renda variável</option>
                    </select>
                    <input type="number" id="valor" placeholder="Valor" required {...register("valor")} />
                    <input type="text" id="descricao" placeholder="Descrição" required {...register("descricao")} />
                    <input type="text" id="corretora" placeholder="Corretora" required {...register("corretora")} />
                    <input type="date" id="data" placeholder="Data" required {...register("data")}/>
                    <StyledButton buttonsize="mdlp" buttonstyle="landingPage" type="submit">Adicionar</StyledButton>
                </form>                
            </StyledModalContainer>
             
        </StyledModalInvestimentoContainer>
    
        
    )
}
