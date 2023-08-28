import { createPortal } from "react-dom";
import { useAppDispatch } from "../../../store";
import {
  TotaisSlice,
  TotalExpenses,
  TotalRecipes,
} from "../../../store/users/TotaisSlice";
import RevenueModal from "../RevenueModal";
import { Revenue } from "../../../model";
import { ListRecipes } from "../../../store/recipes/RecipesSlice";
import {
  resetRecipes,
  QuantidadeRecipes,
} from "../../../store/recipes/QuantidadeRecipesSlice";
import { updateRecipe } from "../../../store/recipes";

interface UpdateRevenueModalProps {
  revenue: Revenue;
  onClose: () => void;
}

export default function UpdateRevenueModal({
  revenue,
  onClose,
}: UpdateRevenueModalProps) {
  const dispatch = useAppDispatch();

  const onSubmit = async (data: Revenue) => {
    await dispatch(updateRecipe(data));

    dispatch(
      ListRecipes({
        pagina: 0,
        quantidadeRegistros: 5,
      })
    );
    dispatch(resetRecipes());
    dispatch(QuantidadeRecipes({}));
    dispatch(TotaisSlice.actions.resetTotais());
    dispatch(TotalRecipes({}));
    onClose?.();
  };

  return (
    <>
      {createPortal(
        <RevenueModal
          title="Atualizar Despesa"
          revenue={revenue}
          onSubmit={onSubmit}
          onClose={onClose}
        />,
        document.getElementById("root")!
      )}
    </>
  );
}
