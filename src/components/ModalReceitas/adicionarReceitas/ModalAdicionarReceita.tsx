import React from "react";
import { StyledButton } from "../../../styles/buttons";
import { StyledSpan, StyledTitle } from "../../../styles/typography";
import { StyledModalContainer, StyledModalReceitaContainer } from "./style";
import { useForm } from 'react-hook-form';

interface ModalAddReceitaProps {
    handleCloseModal: () => void;
}

interface TransactionFormData {
    tipoReceita: string;
    valor: number;
    descricao: string;
    data: string;
}

export default function ModalAddReceita ({ handleCloseModal }: ModalAddReceitaProps) {
    const { register, handleSubmit, reset } = useForm<TransactionFormData>();
    

    const onSubmit = (data: TransactionFormData) => {

        console.log('Dados capturados:', data);
        const transactions = JSON.parse(localStorage.getItem('transactions') || '[]') as TransactionFormData[];
        transactions.push(data);
        localStorage.setItem('transactions', JSON.stringify(transactions));      
        
        
        reset();
    };

    return(
        
       <StyledModalReceitaContainer>
             
            <StyledModalContainer>
                <div>
                    <StyledTitle fontSize="md" fontWeight={700} tag="h3">ADICIONAR TRANSAÇÃO</StyledTitle>
                    <StyledSpan className="close-modal" fontSize="lg" onClick={handleCloseModal}>X</StyledSpan>
                </div>
                <form onSubmit={handleSubmit((data) => onSubmit(data))}>
                    <select id="tipoReceita"  required {...register("tipoReceita")}>
                        <option className="opt" value="" disabled selected>Tipo de Receita</option>
                        <option className="opt" value="Salário">Salário</option>
                        <option className="opt" value="Dividendos">Dividendos</option>
                        <option className="opt" value="Juros Recebidos">Juros Recebidos</option>
                        <option className="opt" value="Pagamentos">Pagamentos</option>
                        <option className="opt" value="Outros">Outros</option>

                    </select>
                    <input type="number" id="valor" placeholder="Valor" required {...register("valor")} />
                    <input type="text" id="descricao" placeholder="Descrição" required {...register("descricao")} />
                    <input type="date" id="data" placeholder="Data" required {...register("data")}/>
                    <StyledButton buttonsize="mdlp" buttonstyle="landingPage" type="submit">Adicionar</StyledButton>
                </form>                
            </StyledModalContainer>
             
        </StyledModalReceitaContainer>
    
        
    )
}
