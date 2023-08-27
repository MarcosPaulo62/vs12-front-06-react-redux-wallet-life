import { http } from "./http"

export async function deleteUser(id: number) {
  const token = localStorage.getItem('user');
  const response = await http.delete(`/usuario/${id}`, { headers: { Authorization: token}})
  return response.data;
}