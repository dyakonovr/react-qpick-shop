import { $axios } from "@/api/api.interceptor";
import { ICategory } from "@/types/features/category.types";

class CategorySerice {
  private url = "/category";

  getAll = async () => {
    const response = await $axios.get<ICategory[]>(this.url);
    return response.data;
  };

  getById = async (id: string | number) => {
    return $axios.get<ICategory>(`${this.url}/${id}`);
  };

  getBySlug = async (slug: string) => {
    return $axios.get<ICategory>(`${this.url}/by-slug/${slug}`);
  };

  create = async (name: string) => {
    return $axios.post<ICategory>(this.url, { name });
  };

  update = async (id: string | number, name: string) => {
    return $axios.put<ICategory>(`${this.url}/${id}`, { name });
  };

  delete = async (id: string | number) => {
    return $axios.delete<ICategory>(`${this.url}/${id}`);
  };
}

export default new CategorySerice();
