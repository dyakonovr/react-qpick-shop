import { RootType } from '@/store/store';

export function isProductInFavouritesSelector(productId: number) {
  return function (state: RootType) {
    if (!state.favourites.data || state.favourites.data.length === 0)
      return false;

    return state.favourites.data.some((product) => product.id === productId);
  };
}

export function getFavouriteQuantitySelector(state: RootType) {
  return state.favourites.data?.length || 0;
}
