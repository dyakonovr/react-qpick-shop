import { IProduct } from "@/interfaces/IProduct";
import classes from './CardsContainer.module.scss';
import Card from "../Card/Card";

interface ICardsContainerProps {
  products: IProduct[]
}

function CardsContainer({products}: ICardsContainerProps) {
  return (
    <div className={classes.products_grid}>
      {products.map(product => <Card {...product} key={product.id} />)}
    </div>
  );
};

export default CardsContainer;