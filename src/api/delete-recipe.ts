import { http } from "./http"

export async function deleteRecipe(id: number) {
  const token = localStorage.getItem('user');
  console.log(token)
  const response = await http.delete(`/receita/${id}`, { headers: { Authorization: token}})
  return response.data;
}