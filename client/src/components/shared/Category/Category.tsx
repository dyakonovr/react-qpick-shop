import { IProduct } from "@/interfaces/IProduct";
import classes from './Category.module.scss';
import Card from "../Card/Card";

interface ICategoryProps {
  categoryName: string,
  products: IProduct[]
}

function Category({ categoryName, products }: ICategoryProps) {
  return (
    <>
      <strong className="subtitle subtitle--gray">{categoryName}</strong>
      <ul className={classes.category__items}>
        {products.map(product => <Card {...product} key={product.id} />)}
      </ul>
    </>
  );
};

export default Category;