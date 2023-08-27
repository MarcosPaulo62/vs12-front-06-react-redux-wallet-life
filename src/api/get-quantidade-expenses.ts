import {http} from './http';

export async function getQuantidadeExpenses(){
  const token = localStorage.getItem('user');

  const response = await http.get<number>(`/despesa/total-registros`,{ headers:{ Authorization: token}});
    return response.data;
}

export type GetQuantidadeExpensesData = {
  totalExpenses: number;
}