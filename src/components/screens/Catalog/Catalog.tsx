import Banner from 'UI/Banner/Banner';
import { useAppSelector } from 'hooks/useAppSelector';
import Categories from '../../UI/Categories/Categories';

function Catalog() {
  const { categories, products } = useAppSelector(state => state.databaseSlice.data);

  return (
    <section className="rows-container">
      <Banner />
      <Categories categories={categories} products={products} />
    </section>
  );
};

export default Catalog;