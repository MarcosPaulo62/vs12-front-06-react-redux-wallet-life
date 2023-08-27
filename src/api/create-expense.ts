import { http } from "./http"

export async function createExpense(data: CreateExpenseData): Promise<CreateExpenseResponse> {
  const token = localStorage.getItem('user');
  const response = await http.post<CreateExpenseResponse>('/despesa/criar-despesa', data, { headers: { Authorization: token}});
  return response.data;

}

export type CreateExpenseData = {
  tipo: string,
  valor: number,
  descricao: string,
  dataPagamento: string,
}

type CreateExpenseResponse = {
  tipo: string,
  valor: number,
  descricao: string,
  dataPagamento: string,
  idDespesa: number
}