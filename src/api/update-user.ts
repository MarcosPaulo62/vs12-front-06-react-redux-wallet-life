import { User } from "../model";
import { http } from "./http"

export async function updateUser(data: User): Promise<User> {
  const token = localStorage.getItem('user');
  const response = await http.put<User, any, Omit<User, 'idUsuario'>>(`/usuario/${data.idUsuario}`, {
    nome: data.nome,
    dataNascimento: data.dataNascimento,
    cpf: data.cpf,
    email: data.email,
    senha: data.senha
  }, { headers: { Authorization: token}});
  return response.data;
}