import { http } from "./http";

export async function getToken(login: string, password: string): Promise<string> {
  const response = await http.post<string>('/auth', { login, senha: password });
  return response.data;
}
