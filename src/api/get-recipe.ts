import { Revenue } from '../model';
import {http} from './http';

export async function getRecipe(id: number){
  const token = localStorage.getItem('user');

  const response = await http.get<Revenue>(`/receita/${id}`,{ headers:{ Authorization: token}});

    return response.data;
}
