import Category from '@UI/Category/Category';
import Banner from '@UI/Banner/Banner';
import classes from './Catalog.module.scss';

function Catalog() {
  return (
    <section className={classes.catalog}>
      <Banner />
      <Category />
    </section>
  );
};

export default Catalog;