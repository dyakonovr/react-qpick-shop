import Card from '../Card/Card';
import classes from './Category.module.scss';
import ICategory from './../../../interfaces/components/ICategory';

const Category: React.FC<ICategory> = ({ categoryName, categoryId, products }) => {
  // Функции  
  function createCards() {
    const cardComponentsList = [];
    console.log(categoryName, categoryId, products);

    for (const product of products) {
      console.log(product);
      cardComponentsList.push(
        <Card {...product} key={product.id} />
      );
    }

    return cardComponentsList
  }
  // Функции END

  return (
    <>
      <strong className="subtitle subtitle--gray">{categoryName}</strong>
      <ul className={classes.category__items}>
        {createCards()}
      </ul>
    </>
  );
};

export default Category;