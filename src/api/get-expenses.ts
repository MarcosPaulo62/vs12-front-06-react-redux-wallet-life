import {http} from './http';

export async function getExpenses(){
  const token = localStorage.getItem('user');

  const response = await http.get<GetExpensesData[]>(`/usuario/usuario-despesa`,{ headers:{ Authorization: token}});
    return response.data;
}

export type GetExpensesData = {
  idUsuario: number,
  nome: string,
  idDespesa: number,
  valor: number,
  descricao: string,
}