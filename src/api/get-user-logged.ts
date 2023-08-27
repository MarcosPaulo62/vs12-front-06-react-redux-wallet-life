import { http } from "./http";

export async function getUserLogged(): Promise<GetUserLoggedResponse> {
  const token = localStorage.getItem('user');
  const response = await http.get<GetUserLoggedResponse>('/usuario/recuperar-usuario-logado', { headers:{ 
    Authorization: token,
  }
  })
  return response.data;
}

export type GetUserLoggedResponse = {
  idUsuario: number,
  nome: string,
  dataNascimento: string,
  cpf: number,
  email: string,
  senha: string,
  cargos: AuthorityResponse,
  login: string
}

export type AuthorityResponse = {
  idCargo: number,
  nome: string,
  authority: string
}