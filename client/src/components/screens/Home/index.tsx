import CardsContainer from '@/components/shared/CardsContainer';
import { PagePaths } from '@/enum/PagePaths';
import { useProducts } from '@/hooks/features/useProducts';
import { Link } from 'react-router-dom';
import Banner from './components/Banner';

function Home() {
  const { data, isLoading, isSuccess, isError } = useProducts();

  return (
    <section className="rows-container">
      <Banner />
      <CardsContainer
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        products={data?.products}
      />
      <Link to={PagePaths.CATALOG} className="link w-fit p-3 mx-auto mt-4">
        Посмотреть больше товаров в каталоге
      </Link>
    </section>
  );
}

export default Home;
