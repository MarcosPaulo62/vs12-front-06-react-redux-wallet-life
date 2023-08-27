import {http} from './http';

export async function getQuantidadeInvestments(){
  const token = localStorage.getItem('user');

  const response = await http.get<number>(`/investimentos/total-registros`,{ headers:{ Authorization: token}});
    return response.data;
}

export type GetQuantidadeInvestmentsData = {
  quantidadeInvestments: number;
}