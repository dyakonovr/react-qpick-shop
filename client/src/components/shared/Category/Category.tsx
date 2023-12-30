import { ICategory } from "@/interfaces/category.interface";
import { IProduct } from "@/interfaces/product.interface";
import Card from "../Card/Card";
import classes from './Category.module.scss';

interface ICategoryProps {
  category: ICategory,
  products: IProduct[]
}

function Category({ category, products }: ICategoryProps) {
  return (
    <>
      <strong className="subtitle subtitle--gray">{category.name}</strong>
      <ul className={classes.category__items}>
        {products.map(product => <Card {...product} key={product.id} />)}
      </ul>
    </>
  );
}

export default Category;