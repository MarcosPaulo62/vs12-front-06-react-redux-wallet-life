import React from "react";
import { StyledButton } from "../../../styles/buttons";
import { StyledSpan, StyledTitle } from "../../../styles/typography";
import { StyledModalContainer, StyledModalDespesaContainer } from "./style";

export default function ModalAddDespesa() {
  return (
    <StyledModalDespesaContainer>
      <StyledModalContainer>
        <div>
          <StyledTitle fontSize="md" fontWeight={700} tag="h3">
            ADICIONAR TRANSAÇÃO
          </StyledTitle>
          <StyledSpan fontSize="lg">X</StyledSpan>
        </div>
        <form action="">
          <select name="" id="" required>
            <option className="opt" value="" disabled selected>
              Tipo de despesa
            </option>
            <option className="opt" value="">
              Única
            </option>
            <option className="opt" value="">
              Recorrente
            </option>
          </select>

          <input type="number" name="" id="" placeholder="Valor" required />
          <input type="text" name="" id="" placeholder="Descrição" required />
          <input type="date" name="" id="" placeholder="Data" required />
          <StyledButton buttonsize="mdlp" buttonstyle="landingPage">
            Adicionar
          </StyledButton>
        </form>
      </StyledModalContainer>
    </StyledModalDespesaContainer>
  );
}
