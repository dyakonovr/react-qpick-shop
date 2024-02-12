import classes from "./styles.module.scss";
import EmptyBasket from "./components/EmptyBasket";
import FilledBasket from "./components/FilledBasket";
import { getBasketInfoAndStatusSelector } from "@/store/slices/basket/basket.selectors";
import { useTypedSelector } from "@/hooks/general/useTypedSelector";

function Cart() {
  const { basketItemsQuantity, isLoading } = useTypedSelector(
    getBasketInfoAndStatusSelector
  );

  return (
    <section className={classes.cart}>
      {basketItemsQuantity === 0 && !isLoading ? (
        <EmptyBasket />
      ) : (
        <FilledBasket />
      )}
    </section>
  );
}

export default Cart;
