import Category from '@UI/Category/Category';
import Banner from '@UI/Banner/Banner';
import { useAppSelector } from '@hooks/useAppSelector';
import IProduct from '@interfaces/store/IProduct';

function Catalog() {
  const { categories, products } = useAppSelector(state => state.databaseSlice.data);
  
  // Функции
  function createCategories() {
    const categoryComponentsList = [];
    
    for (const categoryId in categories) {
      const categoryName = categories[categoryId];
      const currentProducts = products.filter((product: IProduct) => product.categoryId === Number(categoryId));

      categoryComponentsList.push(
        <Category categoryName={categoryName} categoryId={categoryId} products={currentProducts} key={categoryId} />
      );
    }

    return categoryComponentsList;
  }
  // Функции END

  return (
    <section className="rows-container">
      <Banner />
      {createCategories()}
    </section>
  );
};

export default Catalog;