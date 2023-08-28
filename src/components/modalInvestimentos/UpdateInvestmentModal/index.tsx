import { useAppDispatch } from "../../../store";
import { ListInvestments } from "../../../store/investments/InvestmentsSlice";
import {
  QuantidadeInvestments,
  resetInvestments,
} from "../../../store/investments/QuantidadeInvestmentsSlice";
import {
  TotaisSlice,
  TotalInvestments,
} from "../../../store/users/TotaisSlice";
import { Investment } from "../../../model";
import { updateInvestment } from "../../../store/investments";
import InvestmentModal from "../InvestmentModal";
import { createPortal } from "react-dom";

interface UpdateInvestmentModalProps {
  investment: Investment;
  onClose: () => void;
}

export default function ModalAddInvestimento({
  investment,
  onClose,
}: UpdateInvestmentModalProps) {
  const dispatch = useAppDispatch();

  const onSubmit = async (data: Investment) => {
    await dispatch(updateInvestment(data));

    dispatch(
      ListInvestments({
        pagina: 0,
        quantidadeRegistros: 5,
      })
    );
    dispatch(resetInvestments());
    dispatch(QuantidadeInvestments({}));
    dispatch(TotaisSlice.actions.resetTotais());
    dispatch(TotalInvestments({}));
    onClose?.();
  };

  return (
    <>
      {createPortal(
        <InvestmentModal
          title="Atualizar Investimento"
          investment={investment}
          onSubmit={onSubmit}
          onClose={onClose}
        />,
        document.getElementById("root")!
      )}
    </>
  );
}
