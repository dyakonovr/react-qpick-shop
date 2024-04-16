import type { ICategory } from "@/types/features/category.types";
import { $axios } from "@/api/api.interceptor";

class CategorySerice {
  private url = "/category";

  getAll = async () => {
    const response = await $axios.get<ICategory[]>(this.url);
    return response.data;
  };
}

export default new CategorySerice();
