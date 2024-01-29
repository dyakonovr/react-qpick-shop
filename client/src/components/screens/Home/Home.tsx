import CardsContainer from '@/components/shared/CardsContainer/CardsContainer';
import { PagePaths } from '@/enum/PagePaths';
import { useProducts } from '@/hooks/features/products/useProducts';
import { Link } from 'react-router-dom';
import Banner from './components/Banner/Banner';

function Home() {
  const { data, isSuccess } = useProducts();

  return (
    <section className="rows-container">
      <Banner />
      {isSuccess && data?.products && (
        <CardsContainer products={data.products} />
      )}
      <Link to={PagePaths.CATALOG} className="link w-fit p-3 mx-auto mt-4">
        Посмотреть больше товаров в каталоге
      </Link>
    </section>
  );
}

export default Home;
