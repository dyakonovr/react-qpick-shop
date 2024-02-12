import { useQuery } from "@tanstack/react-query";
import categoryService from "@/services/category.service";

export const useCategories = () => {
  const { data, isSuccess } = useQuery({
    queryKey: ["categories"],
    queryFn: () => categoryService.getAll(),
    staleTime: Infinity
  });

  return { categories: data, isSuccess };
};
