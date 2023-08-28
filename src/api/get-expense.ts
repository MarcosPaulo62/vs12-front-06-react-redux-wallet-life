import { Expense } from '../model';
import {http} from './http';

export async function getExpense(id: number){
  const token = localStorage.getItem('user');

  const response = await http.get<Expense>(`/despesa/${id}`,{ headers:{ Authorization: token}});

    return response.data;
}
