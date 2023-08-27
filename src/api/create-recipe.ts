import { http } from "./http"

export async function createRecipe(data: CreateRecipeData): Promise<CreateRecipeResponse> {
  const token = localStorage.getItem('user');
  const response = await http.post<CreateRecipeResponse>('/receita/criar-receita', { headers: { Authorization: token}, params: { data }});
  return response.data;

}

export type CreateRecipeData = {
  valor: number,
  descricao: string,
  banco: string,
  empresa: string,
}

type CreateRecipeResponse = {
  valor: number,
  descricao: string,
  banco: string,
  empresa: string,
  id: number
}