import { Expense } from "../../../model";
import { StyledButton } from "../../../styles/buttons";
import { StyledSpan, StyledTitle } from "../../../styles/typography";
import { StyledModalContainer, StyledModalDespesaContainer } from "./style";
import { useForm } from "react-hook-form";

interface ExpenseModalProps {
  title: string;
  expense?: Expense;
  onClose: () => void;
  onSubmit?: (data: Expense) => void;
}

interface FormData {
  tipoDespesa: string;
  valor: string;
  descricao: string;
  data: string;
}

export default function ExpenseModal({
  title,
  expense,
  onClose,
  onSubmit,
}: ExpenseModalProps) {
  console.log(expense);
  console.log({
    data: expense?.dataPagamento ?? "",
    descricao: expense?.descricao ?? "",
    tipoDespesa: expense?.tipo ?? "",
    valor: String(expense?.valor ?? ""),
  });

  const { register, handleSubmit, reset } = useForm<FormData>({
    values: {
      data: expense?.dataPagamento ?? "",
      descricao: expense?.descricao ?? "",
      tipoDespesa: expense?.tipo ?? "",
      valor: String(expense?.valor ?? ""),
    },
  });

  const onSubmitForm = async (data: FormData) => {
    onSubmit?.({
      dataPagamento: data.data,
      descricao: data.descricao,
      idDespesa: expense?.idDespesa ?? 0,
      tipo: data.tipoDespesa,
      valor: Number(data.valor),
    });

    reset();
  };

  return (
    <StyledModalDespesaContainer>
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
          <select required {...register("tipoDespesa")}>
            <option className="opt" value="" disabled selected>
              Tipo de despesa
            </option>
            <option className="opt" value="VARIAVEL">
              Única
            </option>
            <option className="opt" value="FIXA">
              Recorrente
            </option>
          </select>
          <input
            type="number"
            placeholder="Valor"
            required
            {...register("valor")}
          />
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register("descricao")}
          />
          <input
            type="date"
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
    </StyledModalDespesaContainer>
  );
}
