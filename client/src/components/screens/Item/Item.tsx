import LikeButton from '@/components/shared/LikeButton/LikeButton';
import Price from '@/components/shared/Price/Price';
import { useProduct } from '@/hooks/features/useProduct';
import { IProductInfo } from '@/types/product.types';
import { useSearchParams } from 'react-router-dom';
import classes from './Item.module.scss';
import ItemButtons from './components/ItemButtons';

function Item() {
  const [searchParams, _] = useSearchParams();
  const productId = Number(searchParams.get('id'));

  const product = useProduct(productId);
  const productInfo = transformInfo(product?.info || '');

  // Функии
  function transformInfo(infoString: string): IProductInfo[] {
    return infoString ? JSON.parse(infoString) : [];
  }
  // Функции END

  if (!product) return null;

  return (
    <section className={classes.item}>
      {/* <strong className={`subtitle subtitle--gray`}>{category?.name}</strong> */}
      <div className={`block ${classes.content}`}>
        <div className={classes.content__main}>
          <LikeButton productId={productId} />
          <div className={classes.content__photos}>
            {product?.imgs.map((image) => (
              <div className={classes.content__photo} key={image}>
                <img src={image} alt="Photo 5" key={image} />
              </div>
            ))}
          </div>
          <div className={classes.content__footer}>
            <strong className={classes.content__title}>{product?.name}</strong>
            <Price currentPrice={product?.price || 0} isBigFont={true} />
          </div>
        </div>
      </div>
      <div className={classes.info}>
        <div className={classes.info__wrapper}>
          <strong className={`subtitle block ${classes.info__title}`}>
            Описание и характеристики
          </strong>
          <div className={classes.info__container}>
            {product &&
              productInfo.map((infoObject) => (
                <p
                  className={classes.info__text}
                  key={`${infoObject.name}: ${infoObject.value}`}
                >
                  {`${infoObject.name}: ${infoObject.value}`}
                </p>
              ))}
          </div>
        </div>
        <ItemButtons product={product} />
      </div>
    </section>
  );
}

export default Item;
