import ProductService from '@/services/product/product.service';
import { IProductResponse } from '@/services/product/product.types';
import { useQuery, useQueryClient } from '@tanstack/react-query';

export const useProducts = () => {
  const queryClient = useQueryClient();

  const { data, isSuccess, isError, error } = useQuery({
    queryKey: ['products'],
    queryFn: () => ProductService.getAll({ page: 1, perPage: 9 }),
  });

  const getProductById = async (productId: number) => {
    const product = data?.products.find((p) => p.id === productId);
    if (!!product) return product;

    try {
      const response = await ProductService.getById(productId);

      // queryClient.setQueryData<IProductResponse>(['products'], (state) => {
      //   if (!state) return state;

      //   return { ...state, products: [...state.products, response] };
      // });

      // queryClient.cancelQueries({ queryKey: ['products'] });

      return response;
    } catch (error) {
      console.error('Error fetching product by ID:', error);
      return null;
    }
  };

  return { data, isSuccess, getProductById };
};
