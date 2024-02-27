import type { RootType } from "@/store/store";

export const getFavouritesSelector = (state: RootType) => {
  const { data, isLoading } = state.favourites;
  return {
    favourites: data,
    isLoading,
    isSuccess: !!data
  };
};

export function isProductInFavouritesSelector(productId: number) {
  return function (state: RootType) {
    if (!state.favourites.data || state.favourites.data.length === 0) return false;

    return state.favourites.data.some((product) => product.id === productId);
  };
}

export function getFavouriteQuantitySelector(state: RootType) {
  return state.favourites.data?.length || 0;
}
