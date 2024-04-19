import { createSelector } from "@reduxjs/toolkit";
import type { RootType } from "@/store/store";
import type { IBasketItem } from "@/types/features/basket-item.types";

export const getBasketItems = (state: RootType) => state.basket.items;

export function isProductInBasketSelector(productId: number) {
  return function (state: RootType) {
    if (!state.basket.items || state.basket.items.length === 0) {
      return {
        basketItemId: -1,
        isAddedToBasket: false
      };
    }

    const basketItem = state.basket.items.find(
      (basketItem) => basketItem.product.id === productId
    );

    return {
      basketItemId: basketItem ? basketItem.id : -1,
      isAddedToBasket: !!basketItem
    };
  };
}

export const getBasketInfoSelector = (state: RootType) => state.basket;

export const getBasketItemsAndTotalPriceSelector = createSelector(
  [getBasketInfoSelector],
  (basket) => {
    if (!basket.items || basket.items.length === 0) {
      return { total: 0, basketItems: [] as IBasketItem[] };
    }

    const total = basket.items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
    return { basketItems: basket.items, total, isLoading: basket.isLoading };
  }
);

export const getBasketInfoAndStatusSelector = createSelector(
  [getBasketInfoSelector],
  (basket) => {
    return {
      basketItemsQuantity: basket.items?.length || 0,
      isLoading: basket.isLoading
    };
  }
);
