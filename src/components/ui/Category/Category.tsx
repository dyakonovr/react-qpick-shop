import IProduct from "interfaces/store/database/IProduct";
import Card from "../Card/Card";
import classes from './Category.module.scss';

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