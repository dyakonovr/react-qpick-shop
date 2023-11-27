import { normalizeRating } from '@/functions/normalizeRating';
import { normalizeText } from '@/functions/normalizeText';
import { IProduct } from "@/interfaces/IProduct";
import { Link } from "react-router-dom";
import classes from './Card.module.scss';
import Price from "../Price/Price";
import LikeButton from "../LikeButton/LikeButton";

function Card({ id, categoryId, name, price, imgs, rating }: IProduct) {
  return (
    <li className={classes.card} data-id={id} data-category-id={categoryId}>
      <LikeButton productId={id} />
      <Link to={`/item?id=${id}`}>
        <div className={classes.card__img}>
          <img src={imgs[0]} alt={name} />
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
};

export default Card;