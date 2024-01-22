import { RootType } from '@/store/store';
import { createSelector } from '@reduxjs/toolkit';

export const getBasketItems = (state: RootType) => state.basket.items;

export function isProductInBasketSelector(productId: number) {
  return function (state: RootType) {
    if (!state.basket.items || state.basket.items.length === 0) {
      return {
        basketItemId: -1,
        isAddedToBasket: false,
      };
    }

    const basketItem = state.basket.items.find(
      (basketItem) => basketItem.product.id === productId
    );

    return {
      basketItemId: basketItem ? basketItem.id : -1,
      isAddedToBasket: !!basketItem,
    };
  };
}

export const getBasketItemsAndTotalPriceSelector = createSelector(
  [getBasketItems],
  (basketItems) => {
    if (!basketItems || basketItems.length === 0) {
      return { total: 0, basketItems: [] };
    }

    const total = basketItems.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
    return { basketItems, total };
  }
);

export function getBasketQuantitySelector(state: RootType) {
  return state.basket.items?.length || 0;
}
