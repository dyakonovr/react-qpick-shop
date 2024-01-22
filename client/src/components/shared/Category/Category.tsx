import { ICategory } from '@/types/category.types';
import { IExtendedProduct } from '@/types/product.types';
import Card from '../Card/Card';
import classes from './Category.module.scss';

interface ICategoryProps {
  category: ICategory;
  products: IExtendedProduct[];
}

function Category({ category, products }: ICategoryProps) {
  return (
    <>
      <strong className="subtitle subtitle--gray">{category.name}</strong>
      <ul className={classes.category__items}>
        {products.map((product) => (
          <Card {...product} key={product.id} />
        ))}
      </ul>
    </>
  );
}

export default Category;
