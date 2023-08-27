import { http } from "./http"

export async function deleteInvestiment(id: number) {
  const token = localStorage.getItem('user');
  const response = await http.delete(`/investimentos/${id}`, { headers: { Authorization: token}})
  return response.data;
}