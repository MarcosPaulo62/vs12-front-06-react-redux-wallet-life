import React, { useEffect } from "react";
import { StyledButton } from "../../../styles/buttons";
import { StyledSpan, StyledTitle } from "../../../styles/typography";
import {
  StyledModalContainer,
  StyledModalInvestimentoContainer,
} from "./style";
import { useForm } from "react-hook-form";
import {
  selectCreateSuccess,
  selectErrorOnCreate,
} from "../../../store/investments/Selectors";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../store";
import {
  InvestmentsSlice,
  ListInvestments,
  createInvestment,
} from "../../../store/investments/InvestmentsSlice";
import { QuantidadeInvestments } from "../../../store/investments/QuantidadeInvestmentsSlice";
import { TotalInvestments } from "../../../store/users/TotaisSlice";
import { ToastContainer, toast } from "react-toastify";

interface ModalAddInvestimentoProps {
  handleCloseModal: () => void;
}

interface TransactionFormData {
  tipoInvestimento: "FIXA" | "VARIAVEL";
  valor: number;
  descricao: string;
  corretora: string;
  data: string;
}

export default function ModalAddInvestimento({
  handleCloseModal,
}: ModalAddInvestimentoProps) {
  const { register, handleSubmit, reset } = useForm<TransactionFormData>();
  const dispatch = useAppDispatch();
  const createSuccess = useSelector(selectCreateSuccess);
  const errorOnCreate = useSelector(selectErrorOnCreate);

  const dismissPreviousToasts = () => {
    toast.dismiss();
  };

  const onSubmit = async (data: TransactionFormData) => {
    if (
      data.descricao === "" ||
      data.corretora === "" ||
      data.data === "" ||
      data.valor < 1
    ) {
      toast.warning("É necessário preencher todos os campos corretamente!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      await dispatch(
        createInvestment({
          valor: Number(data.valor),
          descricao: data.descricao,
          corretora: data.corretora,
          dataInicio: data.data,
          tipo: data.tipoInvestimento,
        })
      ).unwrap();
      await dispatch(QuantidadeInvestments({})).unwrap();
      await dispatch(
        ListInvestments({ pagina: 0, quantidadeRegistros: 5 })
      ).unwrap();
      dismissPreviousToasts();
      toast.success("Investimento adicionado com sucesso!", {
        position: toast.POSITION.TOP_CENTER,
      });
      dispatch(TotalInvestments({}));
      reset();
    }
  };

  useEffect(() => {
    dispatch(InvestmentsSlice.actions.resetCreateSucess());
  });
  useEffect(() => {
    if (errorOnCreate) {
      toast.error(errorOnCreate, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }, [errorOnCreate]);

  return (
    <StyledModalInvestimentoContainer>
      <StyledModalContainer>
        <div>
          <StyledTitle fontSize="md" fontWeight={700} tag="h3">
            ADICIONAR TRANSAÇÃO
          </StyledTitle>
          <StyledSpan
            className="close-modal"
            fontSize="lg"
            onClick={handleCloseModal}
          >
            X
          </StyledSpan>
        </div>
        <form onSubmit={handleSubmit((data) => onSubmit(data))}>
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
            Adicionar
          </StyledButton>
        </form>
      </StyledModalContainer>
      <ToastContainer />
    </StyledModalInvestimentoContainer>
  );
}
