import { normalizePrice } from "@/functions/normalizePrice";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import useDebounce from "@/hooks/useDebounce";
import { IExtendedBasketProduct } from "@/interfaces/IBasketProduct";
import { useEffect, useState } from "react";
import changeBasketProductQuantity from "../../api/changeBasketProductQuantity";
import deleteBasketProductRequest from "../../api/deleteBasketProductRequest";
import classes from './CartProduct.module.scss';

interface ICartProductProps {
  product: IExtendedBasketProduct
}

function CartProduct({ product }: ICartProductProps) {
  const dispatch = useAppDispatch();
  
  const [productQuantity, setProductQuantity] = useState<number>(product.quantity);
  const debouncedProductQuantity = useDebounce<number>(productQuantity, 500);

  useEffect(() => {
    if (debouncedProductQuantity === product.quantity) return;

    dispatch(changeBasketProductQuantity(product.id, debouncedProductQuantity));
  }, [debouncedProductQuantity]);

  return (
    <li className={[classes.cart__item, classes.item].join(' ')} key={product.id}>
        <button
          className={classes["item__btn-delete"]}
          onClick={() => dispatch(deleteBasketProductRequest(product.id))}
          data-product-id={product.id}
        >
        </button>
        <div className={classes.item__content}>
          <div className={classes.item__image}><img src={product.img} alt={product.name} /></div>
          <div className={classes.item__info}>
              <strong className={classes.item__title}>{product.name}</strong>
              <span className={classes.item__price}>{normalizePrice(product.price)}</span>
          </div>
        </div>
        <div className={classes.item__footer}>
          <div className={classes.item__counter}>
            <button
              disabled={productQuantity <= 1}
              data-product-id={product.id}
              onClick={() => setProductQuantity(prev => prev - 1)}
              className={`${classes.item__btn} ${classes["item__btn--minus"]}`}>
              </button>
            <span className={classes.item__quantity}>{productQuantity}</span>
            <button
              disabled={productQuantity >= 10}
              data-product-id={product.id}
              onClick={() => setProductQuantity(prev => prev + 1)}
              className={`${classes.item__btn} ${classes["item__btn--plus"]}`}>
            </button>
        </div>
          <span className={classes["item__total-price"]}>{normalizePrice(product.price * product.quantity)}</span>
      </div>
    </li>
  );
};

export default CartProduct;