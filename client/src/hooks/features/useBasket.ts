import { useTypedSelector } from "../general/useTypedSelector";

export const useBasket = () => {
  return useTypedSelector(state => state.basket);
}