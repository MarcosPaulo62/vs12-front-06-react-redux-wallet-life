import {http} from './http';

export async function getInvestments(pagina : number, quantidadeRegistros: number, corretora?: string){
  const token = localStorage.getItem('user');
  console.log(corretora)
  const response = await http.get<GetInvestmentsData[]>(`/usuario/usuario-investimento`,{ headers:{ Authorization: token}, params: { pagina: pagina, quantidadeRegistros: quantidadeRegistros, corretora: corretora}});
    return response.data;
}

export type GetInvestmentsData = {
  idUsuario: number,
  nome: string,
  idInvestimento: number,
  valor: number,
  descricao: string,
  corretora: string,
}