import { Skeleton } from '@/components/ui/skeleton';
import { normalizePrice } from '@/functions/normalizePrice';
import { useActions } from '@/hooks/general/useActions';
import useDebounce from '@/hooks/general/useDebounce';
import { useImageLoader } from '@/hooks/general/useImageLoader';
import { IBasketItem } from '@/services/basket/basket.types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './styles.module.scss';

interface BasketItemProps {
  basketItem: IBasketItem;
}

function BasketItem({ basketItem }: BasketItemProps) {
  const { isImageLoaded } = useImageLoader(basketItem.product.img);
  const { id: basketItemId, product, quantity } = basketItem;
  const { deleteProductFromBasket, updateBasketItemQuantity } = useActions();

  const [productQuantity, setProductQuantity] = useState<number>(quantity);
  const debouncedProductQuantity = useDebounce<number>(productQuantity, 500);

  useEffect(() => {
    if (debouncedProductQuantity === quantity) return;

    updateBasketItemQuantity({
      basketItemId,
      quantity: debouncedProductQuantity,
    });
  }, [debouncedProductQuantity]);

  return (
    <li
      className={[classes.cart__item, classes.item].join(' ')}
      key={product.id}
    >
      <button
        className={classes['item__btn-delete']}
        onClick={() => deleteProductFromBasket(basketItemId)}
        data-product-id={product.id}
      ></button>
      <Link to={`/item?id=${product.id}`} className={classes.item__content}>
        <div className={classes.item__image}>
          {isImageLoaded ? (
            <img src={product.img} alt={product.name} />
          ) : (
            <Skeleton className="w-[140px] h-[140px]" />
          )}
        </div>
        <div className={classes.item__info}>
          <strong className={classes.item__title}>{product.name}</strong>
          <span className={classes.item__price}>
            {normalizePrice(product.price)}
          </span>
        </div>
      </Link>
      <div className={classes.item__footer}>
        <div className={classes.item__counter}>
          <button
            disabled={productQuantity <= 1}
            data-product-id={product.id}
            onClick={() => setProductQuantity((prev) => prev - 1)}
            className={`${classes.item__btn} ${classes['item__btn--minus']}`}
          ></button>
          <span className={classes.item__quantity}>{productQuantity}</span>
          <button
            disabled={productQuantity >= 10}
            data-product-id={product.id}
            onClick={() => setProductQuantity((prev) => prev + 1)}
            className={`${classes.item__btn} ${classes['item__btn--plus']}`}
          ></button>
        </div>
        <span className={classes['item__total-price']}>
          {normalizePrice(product.price * quantity)}
        </span>
      </div>
    </li>
  );
}

export default BasketItem;
