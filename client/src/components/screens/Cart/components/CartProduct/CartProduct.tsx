import { normalizePrice } from '@/functions/normalizePrice';
import { useActions } from '@/hooks/general/useActions';
import useDebounce from '@/hooks/general/useDebounce';
import { IBasketItem } from '@/services/basket/basket.types';
import { useEffect, useState } from 'react';
import classes from './CartProduct.module.scss';

interface ICartProductProps {
  basketItem: IBasketItem;
}

function CartProduct({ basketItem }: ICartProductProps) {
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
      <div className={classes.item__content}>
        <div className={classes.item__image}>
          <img src={product.img} alt={product.name} />
        </div>
        <div className={classes.item__info}>
          <strong className={classes.item__title}>{product.name}</strong>
          <span className={classes.item__price}>
            {normalizePrice(product.price)}
          </span>
        </div>
      </div>
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

export default CartProduct;
