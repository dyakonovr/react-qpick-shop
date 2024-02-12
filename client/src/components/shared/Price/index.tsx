import classes from "./styles.module.scss";
import { normalizePrice } from "@/functions/normalizePrice";

interface IPriceProps {
  price: number;
  isBigFont?: boolean;
}

function Price({ price = 0, isBigFont = false }: IPriceProps) {
  const classNames = isBigFont
    ? `${classes.prices} ${classes["prices--big"]}`
    : classes.prices;

  return (
    <div className={classNames}>
      <span className={classes["price"]}>{normalizePrice(price)}</span>
    </div>
  );
}

export default Price;
