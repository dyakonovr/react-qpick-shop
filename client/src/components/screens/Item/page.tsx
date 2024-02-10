import LikeButton from '@/components/shared/LikeButton';
import Price from '@/components/shared/Price';
import { IExtendedProduct } from '@/types/product/product.types';
import { MoveLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ItemButtons from './components/ItemButtons';
import ItemImage from './components/ItemImage';
import classes from './styles.module.scss';

interface IItemPageProps {
  product: IExtendedProduct;
}

function ItemPage({ product }: IItemPageProps) {
  const navigate = useNavigate();

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
          <LikeButton productId={product.id} />
          <div className={classes.content__photos}>
            <ItemImage src={product.image} alt={`Фото ${product.name} №1`} />
            {product.gallery.map((image, idx) => (
              <ItemImage
                src={image}
                alt={`Фото ${product.name} №${idx + 1}`}
                key={image}
              />
            ))}
          </div>
          <div className={classes.content__footer}>
            <div>
              <strong className={`subtitle subtitle--gray`}>
                {product.category}
              </strong>
              <strong className={classes.content__title}>{product.name}</strong>
            </div>

            <Price price={product.price} isBigFont={true} />
          </div>
        </div>
      </div>
      <div className={classes.info}>
        <div className={classes.info__wrapper}>
          <strong className={`subtitle block ${classes.info__title}`}>
            Описание и характеристики
          </strong>
          <div className={classes.info__container}>
            {product.info.map((infoObject) => (
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

export default ItemPage;
