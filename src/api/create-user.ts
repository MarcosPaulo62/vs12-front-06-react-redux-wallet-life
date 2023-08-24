import { getToken } from "./get-token";
import { http } from "./http"

export async function createUser(data: CreateUserData): Promise<CreateUserResponse> {
  // TODO: Remover token depois da alteração no backend 
  const token = await getToken('admin', 'senha123')
  const response = await http.post<CreateUserResponse>('/usuario', data, {
    headers: {
      Authorization: token
    }
  })

  return response.data;
}

export type CreateUserData = {
  nome: string,
  dataNascimento: string,
  cpf: string,
  email: string,
  senha: string,
  tipoCargo: number,
  login: string
}

type CreateUserResponse = {
  nome: string,
  dataNascimento: string,
  cpf: string,
  email: string,
  senha: string,
  tipoCargo: number,
  login: string,
  idUsuario: number
}
