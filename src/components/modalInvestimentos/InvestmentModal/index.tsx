import React, { useEffect } from "react";
import { StyledButton } from "../../../styles/buttons";
import { StyledSpan, StyledTitle } from "../../../styles/typography";
import {
  StyledModalContainer,
  StyledModalInvestimentoContainer,
} from "./style";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { Investment } from "../../../model";

interface InvestmentModalProps {
  title?: string;
  investment?: Investment;
  onSubmit?: (data: Investment) => void;
  onClose: () => void;
}

interface FormData {
  tipoInvestimento: string;
  valor: string;
  descricao: string;
  corretora: string;
  data: string;
}

export default function InvestmentModal({
  investment,
  title,
  onSubmit,
  onClose,
}: InvestmentModalProps) {
  const { register, handleSubmit, reset } = useForm<FormData>({
    values: {
      corretora: investment?.corretora ?? "",
      data: investment?.dataInicio ?? "",
      descricao: investment?.descricao ?? "",
      tipoInvestimento: investment?.tipo ?? "",
      valor: String(investment?.valor ?? ""),
    },
  });

  const onSubmitForm = async (data: FormData) => {
    if (
      data.descricao === "" ||
      data.corretora === "" ||
      data.data === "" ||
      Number(data.valor) < 1
    ) {
      toast.warning("É necessário preencher todos os campos corretamente!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      onSubmit?.({
        idInvestimento: investment?.idInvestimento ?? 0,
        valor: Number(data.valor),
        descricao: data.descricao,
        corretora: data.corretora,
        dataInicio: data.data,
        tipo: data.tipoInvestimento,
      });
      reset();
    }
  };

  return (
    <StyledModalInvestimentoContainer>
      <StyledModalContainer>
        <div>
          <StyledTitle fontSize="md" fontWeight={700} tag="h3">
            {title}
          </StyledTitle>
          <StyledSpan className="close-modal" fontSize="lg" onClick={onClose}>
            X
          </StyledSpan>
        </div>
        <form onSubmit={handleSubmit((data) => onSubmitForm(data))}>
          <select
            id="tipoInvestimento"
            required
            {...register("tipoInvestimento")}
          >
            <option className="opt" value="" disabled selected>
              Tipo de investimento
            </option>
            <option className="opt" value="FIXA">
              Renda fixa
            </option>
            <option className="opt" value="VARIAVEL">
              Renda variável
            </option>
          </select>
          <input
            type="number"
            id="valor"
            placeholder="Valor"
            required
            {...register("valor")}
          />
          <input
            type="text"
            id="descricao"
            placeholder="Descrição"
            required
            minLength={5}
            maxLength={30}
            {...register("descricao")}
          />
          <input
            type="text"
            id="corretora"
            placeholder="Corretora"
            required
            minLength={3}
            {...register("corretora")}
          />
          <input
            type="date"
            id="data"
            placeholder="Data"
            required
            {...register("data")}
          />
          <StyledButton
            buttonsize="mdlp"
            buttonstyle="landingPage"
            type="submit"
          >
            Concluir
          </StyledButton>
        </form>
      </StyledModalContainer>
      <ToastContainer />
    </StyledModalInvestimentoContainer>
  );
}
