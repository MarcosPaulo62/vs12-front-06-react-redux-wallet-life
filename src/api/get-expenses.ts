import {http} from './http';

export async function getExpenses(pagina : number, quantidadeRegistros: number, valor?: number){
  const token = localStorage.getItem('user');

  const response = await http.get<GetExpensesData[]>(`/usuario/usuario-despesa`,{ headers:{ Authorization: token}, params: { pagina: pagina,
    quantidadeRegistros: quantidadeRegistros, valor: valor}});
    return response.data;
}

export type GetExpensesData = {
  idUsuario: number,
  nome: string,
  idDespesa: number,
  valor: number,
  descricao: string,
}