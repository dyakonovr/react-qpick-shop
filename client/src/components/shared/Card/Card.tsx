import { normalizeRating } from '@/functions/normalizeRating';
import { normalizeText } from '@/functions/normalizeText';
import { IProduct } from '@/interfaces/product.interface';
import { Link } from 'react-router-dom';
import LikeButton from '../LikeButton/LikeButton';
import Price from '../Price/Price';
import classes from './Card.module.scss';

function Card({ id, name, price, img, rating }: IProduct) {
  return (
    <li className={classes.card} data-id={id}>
      <LikeButton productId={id} />
      <Link to={`/item?id=${id}`}>
        <div className={classes.card__img}>
          <img src={img} alt={name} />
        </div>
        <div className={classes.card__wrapper}>
          <strong className={classes.card__title}>{normalizeText(name)}</strong>
          <Price oldPrice={0} currentPrice={price} />
          <span></span>
        </div>
        <span className={classes.card__grade}>{normalizeRating(rating)}</span>
      </Link>
    </li>
  );
}

export default Card;
