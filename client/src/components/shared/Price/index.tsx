import { normalizePrice } from '@/functions/normalizePrice';
import classes from './styles.module.scss';

interface PriceProps {
  currentPrice: number;
  oldPrice?: number;
  isBigFont?: boolean;
}

function Price({
  currentPrice = 0,
  oldPrice = 0,
  isBigFont = false,
}: PriceProps) {
  const classNames = isBigFont
    ? `${classes.prices} ${classes['prices--big']}`
    : classes.prices;

  return (
    <div className={classNames}>
      <span className={`${classes['price']} ${classes['price--current']}`}>
        {normalizePrice(currentPrice)}
      </span>
      {!!oldPrice && (
        <span className={`${classes['price']} ${classes['price--old']}`}>
          {normalizePrice(oldPrice)}
        </span>
      )}
    </div>
  );
}

export default Price;
