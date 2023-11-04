import { IProduct } from "@/interfaces/IProduct";
import classes from './Category.module.scss';
import Card from "../Card/Card";
import { ICategory } from "@/interfaces/ICategory";

interface ICategoryProps {
  category: ICategory,
  products: IProduct[]
}

function Category({ category, products }: ICategoryProps) {
  console.log(category);

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