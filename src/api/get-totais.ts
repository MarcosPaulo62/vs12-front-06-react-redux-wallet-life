import {http} from './http';

export async function getTotalRecipes(){
  const token = localStorage.getItem('user');

  const response = await http.get<number>(`/receita/valor-total`,{ headers:{ Authorization: token}});
    return response.data;
}

export type GetTotalRecipesData = {
  totalRecipes: number;
}

export async function getTotalInvestments(){
  const token = localStorage.getItem('user');

  const response = await http.get<number>(`/investimentos/valor-total`,{ headers:{ Authorization: token}});
    return response.data;
}

export type GetTotalInvestmentsData = {
  totalInvestments: number;
}

export async function getTotalExpenses(){
  const token = localStorage.getItem('user');

  const response = await http.get<number>(`/despesa/valor-total`,{ headers:{ Authorization: token}});
    return response.data;
}

export type GetTotalExpensesData = {
  totalExpenses: number;
}
