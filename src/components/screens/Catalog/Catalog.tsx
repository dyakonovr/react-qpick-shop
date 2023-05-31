import Category from '@UI/Category/Category';
import Banner from '@UI/Banner/Banner';

function Catalog() {
  return (
    <section className="rows-container">
      <Banner />
      <Category />
      <Category />
      <Category />
    </section>
  );
};

export default Catalog;