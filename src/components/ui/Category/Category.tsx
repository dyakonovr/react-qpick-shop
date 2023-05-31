import Card from '../Card/Card';
import classes from './Category.module.scss';

function Category() {
  return (
    <>
      <strong className="subtitle subtitle--gray">Чехлы</strong>
      <ul className={classes.category__items}>
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </>
  );
};

export default Category;