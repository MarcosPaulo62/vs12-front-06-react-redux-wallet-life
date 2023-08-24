import { http } from "./http"

export async function createUser(data: CreateUserData): Promise<CreateUserResponse> {
  const response = await http.post<CreateUserResponse>('/auth/criar-usuario', data)

  return response.data;
}

export type CreateUserData = {
  nome: string,
  dataNascimento: string,
  cpf: string,
  email: string,
  senha: string,
}

type CreateUserResponse = {
  nome: string,
  dataNascimento: string,
  cpf: string,
  email: string,
  senha: string,
  idUsuario: number
}
