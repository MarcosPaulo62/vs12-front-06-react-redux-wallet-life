import { createPortal } from "react-dom";
import { useAppDispatch } from "../../../store";
import {
  ListExpenses,
  QuantidadeExpenses,
  resetQuantidadeExpenses,
  updateExpense,
} from "../../../store/expenses";
import { TotaisSlice, TotalExpenses } from "../../../store/users/TotaisSlice";
import ExpenseModal from "../ExpenseModal";
import { Expense } from "../../../model";

interface UpdateExpenseModalProps {
  expense: Expense;
  onClose: () => void;
}

export default function UpdateExpenseModal({
  expense,
  onClose,
}: UpdateExpenseModalProps) {
  const dispatch = useAppDispatch();

  const onSubmit = async (data: Expense) => {
    await dispatch(updateExpense(data));

    dispatch(
      ListExpenses({
        pagina: 1,
        quantidadeRegistros: 5,
      })
    );
    dispatch(resetQuantidadeExpenses());
    dispatch(QuantidadeExpenses({}));
    dispatch(TotaisSlice.actions.resetTotais());
    dispatch(TotalExpenses({}));
    onClose?.();
  };

  return (
    <>
      {createPortal(
        <ExpenseModal
          title="Atualizar Despesa"
          expense={expense}
          onSubmit={onSubmit}
          onClose={onClose}
        />,
        document.getElementById("root")!
      )}
    </>
  );
}
