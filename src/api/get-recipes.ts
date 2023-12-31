import {http} from './http';

export async function getRecipes(pagina : number, quantidadeRegistros: number, valor?: number){
  const token = localStorage.getItem('user');

  const response = await http.get<GetRecipesData[]>(`/usuario/usuario-receita`,{ headers:{ Authorization: token}, params: { pagina: pagina,
    quantidadeRegistros: quantidadeRegistros, valor: valor}});
    return response.data;
}

export type GetRecipesData = {
  idUsuario: number,
  nome: string,
  idReceita: number,
  valor: number,
  descricao: string,
  banco: string
}