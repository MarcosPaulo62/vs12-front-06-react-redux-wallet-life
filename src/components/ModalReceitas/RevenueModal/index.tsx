import { StyledButton } from "../../../styles/buttons";
import { StyledSpan, StyledTitle } from "../../../styles/typography";
import { StyledModalContainer, StyledModalReceitaContainer } from "./style";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { Revenue } from "../../../model";

interface RevenueModalProps {
  title?: string;
  revenue?: Revenue;
  onSubmit?: (data: Revenue) => void;
  onClose: () => void;
}

interface FormData {
  banco: string;
  valor: string;
  descricao: string;
  empresa: string;
}

export default function RevenueModal({
  revenue,
  title,
  onSubmit,
  onClose,
}: RevenueModalProps) {
  const { register, handleSubmit, reset } = useForm<FormData>({
    values: {
      banco: revenue?.banco ?? "",
      descricao: revenue?.descricao ?? "",
      empresa: revenue?.empresa ?? "",
      valor: String(revenue?.valor ?? ""),
    },
  });

  const onSubmitForm = async (data: FormData) => {
    if (
      data.banco === "" ||
      data.descricao === "" ||
      data.empresa === "" ||
      data.valor === ""
    ) {
      toast.warning("É necessário preencher todos os campos!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      onSubmit?.({
        id: revenue?.id ?? 0,
        banco: data.banco,
        descricao: data.descricao,
        empresa: data.empresa,
        valor: Number(data.valor),
      });
      reset();
    }
  };

  return (
    <StyledModalReceitaContainer>
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
          <input
            type="number"
            id="valor"
            placeholder="Valor (R$)"
            {...register("valor")}
          />
          <input
            type="text"
            id="descricao"
            placeholder="Descrição"
            minLength={5}
            maxLength={30}
            {...register("descricao")}
          />
          <input
            type="text"
            id="empresa"
            placeholder="Empresa"
            minLength={3}
            {...register("empresa")}
          />
          <input
            type="text"
            id="banco"
            placeholder="Banco"
            minLength={3}
            {...register("banco")}
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
    </StyledModalReceitaContainer>
  );
}
