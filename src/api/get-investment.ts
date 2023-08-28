import { Investment } from '../model';
import {http} from './http';

export async function getInvestment(id: number){
  const token = localStorage.getItem('user');

  const response = await http.get<Investment>(`/investimentos/${id}`,{ headers:{ Authorization: token}});

    return response.data;
}
