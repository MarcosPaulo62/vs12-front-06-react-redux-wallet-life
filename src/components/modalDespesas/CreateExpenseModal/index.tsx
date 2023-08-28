import { useAppDispatch } from "../../../store";
import {
  ListExpenses,
  QuantidadeExpenses,
  createExpense,
  resetQuantidadeExpenses,
} from "../../../store/expenses";
import { TotaisSlice, TotalExpenses } from "../../../store/users/TotaisSlice";
import ExpenseModal from "../ExpenseModal";
import { Expense } from "../../../model";

interface CreateExpenseModalProps {
  onClose: () => void;
}

export default function CreateExpenseModal({
  onClose,
}: CreateExpenseModalProps) {
  const dispatch = useAppDispatch();

  const onSubmit = async (data: Expense) => {
    await dispatch(
      createExpense({
        tipo: data.tipo,
        dataPagamento: data.dataPagamento,
        descricao: data.descricao,
        valor: Number(data.valor),
      })
    );

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
    <ExpenseModal title="Criar Despesa" onSubmit={onSubmit} onClose={onClose} />
  );
}
