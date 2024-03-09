import classes from "./styles.module.scss";
import EmptyBasket from "./screens/EmptyBasket";
import FilledBasket from "./screens/FilledBasket";
import { getBasketInfoAndStatusSelector } from "@/store/slices/basket/basket.selectors";
import { useTypedSelector } from "@/hooks/general/useTypedSelector";

function Basket() {
  const { basketItemsQuantity, isLoading } = useTypedSelector(
    getBasketInfoAndStatusSelector
  );

  return (
    <section className={classes.cart}>
      {basketItemsQuantity !== 0 || isLoading ? <FilledBasket /> : <EmptyBasket />}
    </section>
  );
}

export default Basket;
