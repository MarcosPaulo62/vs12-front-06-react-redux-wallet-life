import { Revenue } from "../model";
import { http } from "./http"

export async function updateRecipe(data: Revenue): Promise<Revenue> {
  const token = localStorage.getItem('user');
  
  const response = await http.put<Revenue, any, Omit<Revenue, 'id'>>(`/receita/${data.id}`, {
    valor: data.valor,
    banco: data.banco,
    descricao: data.descricao,
    empresa: data.empresa
  }, { headers: { Authorization: token}});

  return response.data;
}