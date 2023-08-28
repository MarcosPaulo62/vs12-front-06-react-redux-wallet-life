import { Investment } from "../model";
import { http } from "./http"

export async function updateInvestment(data: Investment): Promise<Investment> {
  const token = localStorage.getItem('user');
  
  const response = await http.put<Investment, any, Omit<Investment, 'idInvestimento'>>(`/investimentos/${data.idInvestimento}`, {
    valor: data.valor,
    corretora: data.corretora,
    descricao: data.descricao,
    dataInicio: data.dataInicio,
    tipo: data.tipo
  }, { headers: { Authorization: token}});

  return response.data;
}