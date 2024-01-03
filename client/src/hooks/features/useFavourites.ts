import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useProfile } from "./useProfile";
import UserService from '@/services/user.service';

export const useFavourites = () => {
  const { favourites } = useProfile();
  const queryClient = useQueryClient();

  const { mutate: toggleFavourite } = useMutation({
    mutationKey: ['toggle favourite'],
    mutationFn: (productId: number) => UserService.toggleFavourite(productId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['profile'] }),
  });

  // Функции
  function isProductInFavourites(productId: number) {
    return favourites.some(fp => fp.id === productId);
  }
  // Функции END

  return { favourites, isProductInFavourites, toggleFavourite };
};
