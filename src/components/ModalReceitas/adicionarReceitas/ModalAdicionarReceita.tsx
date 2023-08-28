import { useEffect } from "react";
import { StyledButton } from "../../../styles/buttons";
import { StyledSpan, StyledTitle } from "../../../styles/typography";
import { StyledModalContainer, StyledModalReceitaContainer } from "./style";
import { useForm } from "react-hook-form";

import { useAppDispatch } from "../../../store";
import { useSelector } from "react-redux";
import {
  selectCreateSuccess,
  selectErrorOnCreate,
} from "../../../store/recipes/Selectors";
import { ToastContainer, toast } from "react-toastify";
import {
  ListRecipes,
  RecipesSlice,
  createRecipe,
} from "../../../store/recipes/RecipesSlice";
import { QuantidadeExpenses } from "../../../store/expenses";
import { TotalRecipes } from "../../../store/users/TotaisSlice";

interface ModalAddReceitaProps {
  handleCloseModal: () => void;
}

interface TransactionFormData {
  banco: string;
  valor: string;
  descricao: string;
  empresa: string;
}

export default function ModalAddReceita({
  handleCloseModal,
}: ModalAddReceitaProps) {
  const { register, handleSubmit, reset } = useForm<TransactionFormData>();
  const dispatch = useAppDispatch();
  const createSuccess = useSelector(selectCreateSuccess);
  const errorOnCreate = useSelector(selectErrorOnCreate);

  const dismissPreviousToasts = () => {
    toast.dismiss();
  };

  const onSubmit = async (data: TransactionFormData) => {
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
      await dispatch(
        createRecipe({
          valor: Number(data.valor),
          descricao: data.descricao,
          empresa: data.empresa,
          banco: data.empresa,
        })
      ).unwrap();
      await dispatch(QuantidadeExpenses({})).unwrap();
      await dispatch(
        ListRecipes({ pagina: 0, quantidadeRegistros: 5 })
      ).unwrap();
      dismissPreviousToasts();
      toast.success("Receita adicionada com sucesso!", {
        position: toast.POSITION.TOP_CENTER,
      });
      dispatch(TotalRecipes({}));
      reset();
    }
  };

  useEffect(() => {
    if (createSuccess) {
      toast.success("Receita cadastrada com sucesso!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    dispatch(RecipesSlice.actions.resetCreateSucess());
  });
  useEffect(() => {
    if (errorOnCreate) {
      toast.error(errorOnCreate, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }, [errorOnCreate]);

  return (
    <StyledModalReceitaContainer>
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
            {...register("descricao")}
          />
          <input
            type="text"
            id="empresa"
            placeholder="Empresa"
            {...register("empresa")}
          />
          <input
            type="text"
            id="banco"
            placeholder="Banco"
            {...register("banco")}
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
    </StyledModalReceitaContainer>
  );
}
