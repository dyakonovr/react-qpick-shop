import { useTypedSelector } from "./useTypedSelector"

export const useBasket = () => {
  return useTypedSelector(state => state.basket);
}