import IPrice from '@interfaces/UI/IPrice';
import classes from './Price.module.scss';
import { normalizePrice } from '@functions/normalizePrice';

function Price(props: IPrice) {
  const { oldPrice, currentPrice, isBigFont } = props;

  return (
    <div className={isBigFont ? `${classes.prices} ${classes["prices--big"]}` : classes.prices}>
      <span className={`${classes["price"]} ${classes["price--current"]}`}>{normalizePrice(currentPrice)}</span>
      {oldPrice ? <span className={`${classes["price"]} ${classes["price--old"]}`}>{normalizePrice(oldPrice)}</span> : false}
    </div>
  );
};

export default Price;