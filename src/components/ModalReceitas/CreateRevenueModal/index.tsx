import { useEffect } from "react";

import { useAppDispatch } from "../../../store";
import { useSelector } from "react-redux";
import {
  selectCreateSuccess,
  selectErrorOnCreate,
} from "../../../store/recipes/Selectors";
import {
  ListRecipes,
  RecipesSlice,
  createRecipe,
} from "../../../store/recipes/RecipesSlice";
import { QuantidadeExpenses } from "../../../store/expenses";
import { TotalRecipes } from "../../../store/users/TotaisSlice";
import RevenueModal from "../RevenueModal";
import { Revenue } from "../../../model";
import { toast } from "react-toastify";
import { createPortal } from "react-dom";

interface CreateRevenueModalProps {
  onClose: () => void;
}

export default function CreateRevenueModal({
  onClose,
}: CreateRevenueModalProps) {
  const dispatch = useAppDispatch();
  const createSuccess = useSelector(selectCreateSuccess);
  const errorOnCreate = useSelector(selectErrorOnCreate);

  const dismissPreviousToasts = () => {
    toast.dismiss();
  };

  const onSubmit = async (data: Revenue) => {
    await dispatch(
      createRecipe({
        valor: data.valor,
        descricao: data.descricao,
        empresa: data.empresa,
        banco: data.empresa,
      })
    ).unwrap();
    await dispatch(QuantidadeExpenses({})).unwrap();
    await dispatch(ListRecipes({ pagina: 0, quantidadeRegistros: 5 })).unwrap();
    dismissPreviousToasts();
    toast.success("Receita adicionada com sucesso!", {
      position: toast.POSITION.TOP_CENTER,
    });
    dispatch(TotalRecipes({}));
    onClose?.();
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
    <>
      {createPortal(
        <RevenueModal
          title="Adicionar Receita"
          onSubmit={onSubmit}
          onClose={onClose}
        />,
        document.getElementById("root")!
      )}
    </>
  );
}
