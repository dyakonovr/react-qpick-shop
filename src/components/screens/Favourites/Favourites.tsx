import { useAppSelector } from 'hooks/useAppSelector';
import IProduct from 'interfaces/store/database/IProduct';
import IDatabase from 'interfaces/store/database/IDatabase';
import Categories from '../../UI/Categories/Categories';

function Favourites() {
  const { idList } = useAppSelector(state => state.favouritesSlice);
  const { categories, products } = useAppSelector(state => state.databaseSlice.data);
  const data = createData();

  // Функции
  function createData() {
    const data: IDatabase = { categories: {}, products: [] };
    // Формирую объект Data
    data.products = products.filter((product: IProduct) => {
      if (idList.includes(product.id)) {
        // Проверка, нужно ли добавлять категорию
        if (!(product.categoryId in data.categories)) data.categories[product.categoryId] = categories[product.categoryId]; 
        return true;
      }

      return false;
    });
    // Формирую объект Data END

    return data;
  }
  // Функции END

  return (
    <section className="rows-container">
      <strong className="subtitle">Избранное</strong>
      <Categories categories={data.categories} products={data.products} />
    </section>
  );
};

export default Favourites;