import { Expense } from "../model";
import { http } from "./http"

export async function updateExpense(data: Expense): Promise<Expense> {
  const token = localStorage.getItem('user');
  const response = await http.put<Expense, any, Omit<Expense, 'idDespesa'>>(`/despesa/${data.idDespesa}`, {
    valor: data.valor,
    dataPagamento: data.dataPagamento,
    descricao: data.descricao,
    tipo: data.tipo
  }, { headers: { Authorization: token}});
  return response.data;
}