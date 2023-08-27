import { http } from "./http"

export async function deleteExpense(id: number) {
  const token = localStorage.getItem('user');
  const response = await http.delete(`/despesa/${id}`, { headers: { Authorization: token}})
  return response.data;
}