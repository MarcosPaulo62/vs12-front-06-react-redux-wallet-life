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
import { ToastContainer, toast } from "react-toastify";

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
    toast.success("Despesa adicionado com sucesso!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <>
      <ExpenseModal title="Criar Despesa" onSubmit={onSubmit} onClose={onClose} />
      <ToastContainer />
    </>
  );
}
