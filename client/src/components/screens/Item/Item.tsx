import LikeButton from '@/components/shared/LikeButton/LikeButton';
import Price from '@/components/shared/Price/Price';
import { useProduct } from '@/hooks/features/useProduct';
import { IProductInfo } from '@/types/product.types';
import { MoveLeft } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import classes from './Item.module.scss';
import ItemButtons from './components/ItemButtons';

function Item() {
  const navigate = useNavigate();
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
      <strong
        onClick={() => navigate(-1)}
        className={`subtitle ${classes.item__back_link}`}
      >
        <MoveLeft /> Назад
      </strong>
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
            <div>
              <strong className={`subtitle subtitle--gray`}>
                {product.category.name}
              </strong>
              <strong className={classes.content__title}>
                {product?.name}
              </strong>
            </div>
            <Price currentPrice={product.price} isBigFont={true} />
          </div>
        </div>
      </div>
      <div className={classes.info}>
        <div className={classes.info__wrapper}>
          <strong className={`subtitle block ${classes.info__title}`}>
            Описание и характеристики
          </strong>
          <div className={classes.info__container}>
            {productInfo.map((infoObject) => (
              <p className={classes.info__text} key={infoObject.name}>
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
