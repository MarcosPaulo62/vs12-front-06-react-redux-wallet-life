import { http } from "./http"

export async function createInvestment(data: CreateInvestmentData): Promise<CreateInvestmentResponse> {
  const token = localStorage.getItem('user');
  const response = await http.post<CreateInvestmentResponse>('/investimentos/criar-investimento', data, { headers: { Authorization: token}});
  return response.data;

}

export type CreateInvestmentData = {
  tipo: string,
  valor: number,
  descricao: string,
  corretora: string,
  dataInicio: string,
}

type CreateInvestmentResponse = {
  tipo: string,
  valor: number,
  descricao: string,
  corretora: string,
  dataInicio: string,
  idInvestimento: number
}