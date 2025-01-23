import FilledBasketSkeleton from "./skeleton";
import FilledBasketPage from "./page";
import { getBasketItemsAndTotalPriceSelector } from "@/store/slices/basket/basket.selectors";
import { useTypedSelector } from "@/shared/hooks/useTypedSelector";

function FilledBasket() {
  const { basketItems, total, isLoading } = useTypedSelector(
    getBasketItemsAndTotalPriceSelector
  );

  if (isLoading) return <FilledBasketSkeleton />;
  return <FilledBasketPage basketItems={basketItems} total={total} />;
}

export default FilledBasket;
