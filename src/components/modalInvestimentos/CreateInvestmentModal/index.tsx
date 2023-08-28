import React, { useEffect } from "react";
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
import { Investment } from "../../../model";
import InvestmentModal from "../InvestmentModal";
import { createPortal } from "react-dom";

interface CreateInvestmentModalProps {
  onClose: () => void;
}

export default function CreateInvestmentModal({
  onClose,
}: CreateInvestmentModalProps) {
  const dispatch = useAppDispatch();
  const createSuccess = useSelector(selectCreateSuccess);
  const errorOnCreate = useSelector(selectErrorOnCreate);

  const dismissPreviousToasts = () => {
    toast.dismiss();
  };

  const onSubmit = async (data: Investment) => {
    await dispatch(
      createInvestment({
        valor: Number(data.valor),
        descricao: data.descricao,
        corretora: data.corretora,
        dataInicio: data.dataInicio,
        tipo: data.tipo,
      })
    ).unwrap();
    await dispatch(QuantidadeInvestments({})).unwrap();
    await dispatch(ListInvestments({ pagina: 0, QuantidadeInvestments: 5 }))
      .unwrap;
    dismissPreviousToasts();
    toast.success("Investimento adicionado com sucesso!", {
      position: toast.POSITION.TOP_CENTER,
    });
    dispatch(TotalInvestments({}));
    onClose?.();
  };

  useEffect(() => {
    if (createSuccess) {
      toast.success("Investimento cadastrado com sucesso!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
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
    <>
      {createPortal(
        <InvestmentModal
          title="Adicionar Investimento"
          onSubmit={onSubmit}
          onClose={onClose}
        />,
        document.getElementById("root")!
      )}
    </>
  );
}
