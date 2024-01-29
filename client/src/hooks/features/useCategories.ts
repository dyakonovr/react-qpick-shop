import categoryService from '@/services/category.service';
import { useQuery } from '@tanstack/react-query';

export const useCategories = () => {
  const { data, isSuccess } = useQuery({
    queryKey: ['categories'],
    queryFn: () => categoryService.getAll(),
    staleTime: Infinity,
  });

  return { categories: data, isSuccess };
};
