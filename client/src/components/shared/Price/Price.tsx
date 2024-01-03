import classes from './Price.module.scss';
import { normalizePrice } from '@/functions/normalizePrice';

interface IPriceProps {
  currentPrice: number,
  oldPrice?: number,
  isBigFont?: boolean
}

function Price({ currentPrice, oldPrice = 0, isBigFont = false }: IPriceProps) {
  return (
    <div
      className={
        isBigFont
          ? `${classes.prices} ${classes['prices--big']}`
          : classes.prices
      }
    >
      <span className={`${classes['price']} ${classes['price--current']}`}>
        {normalizePrice(currentPrice)}
      </span>
      {oldPrice ? (
        <span className={`${classes['price']} ${classes['price--old']}`}>
          {normalizePrice(oldPrice)}
        </span>
      ) : (
        false
      )}
    </div>
  );
};

export default Price;