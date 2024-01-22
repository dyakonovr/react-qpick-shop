import { IProduct } from '@/types/product.types';
import Card from '../Card/Card';
import classes from './CardsContainer.module.scss';

interface ICardsContainerProps {
  products: IProduct[];
}

function CardsContainer({ products }: ICardsContainerProps) {
  return (
    <div className={classes.products_grid}>
      {products.map((product) => (
        <Card {...product} key={product.id} />
      ))}
    </div>
  );
}

export default CardsContainer;
