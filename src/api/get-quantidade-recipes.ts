import {http} from './http';

export async function getQuantidadeRecipes(){
  const token = localStorage.getItem('user');

  const response = await http.get<number>(`/receita/total-registros`,{ headers:{ Authorization: token}});
    return response.data;
}

export type GetQuantidadeRecipesData = {
  quantidadeRecipes: number;
}