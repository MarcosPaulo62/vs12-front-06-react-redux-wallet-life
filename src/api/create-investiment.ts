import { http } from "./http"

export async function createInvestiment(data: CreateInvestimentData): Promise<CreateInvestimentResponse> {
  const token = localStorage.getItem('user');
  const response = await http.post<CreateInvestimentResponse>('/investimentos/criar-investimentos', { headers: { Authorization: token}, params: { data }});
  return response.data;

}

export type CreateInvestimentData = {
  tipo: "FIXA" | "VARIAVEL",
  valor: number,
  descricao: string,
  corretora: string,
  dataInicio: string,
}

type CreateInvestimentResponse = {
  tipo: string,
  valor: number,
  descricao: string,
  corretora: string,
  dataInicio: string,
  idInvestimento: number
}