import LikeButton from '@/components/shared/LikeButton';
import Price from '@/components/shared/Price';
import { useProduct } from '@/hooks/features/useProduct';
import { useQueryParams } from '@/hooks/general/useQueryParams';
import { ProductInfo } from '@/types/product.types';
import { MoveLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ItemButtons from './components/ItemButtons';
import ItemImage from './components/ItemImage';
import ItemSkeleton from './skeleton';
import classes from './styles.module.scss';

function Item() {
  const navigate = useNavigate();
  const productId = Number(useQueryParams('id'));

  const { product, isLoading } = useProduct(productId);
  if (isLoading) return <ItemSkeleton />;

  const productInfo = transformInfo(product?.info || '');

  // Функии
  function transformInfo(infoString: string): ProductInfo[] {
    return infoString ? JSON.parse(infoString) : [];
  }
  // Функции END

  if (!product) return <></>;

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
            {product?.imgs.map((image, idx) => (
              <ItemImage
                src={image}
                alt={`Фото ${product.name} №${idx}`}
                key={image}
              />
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
