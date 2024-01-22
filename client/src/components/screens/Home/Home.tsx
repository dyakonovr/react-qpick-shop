import CardsContainer from '@/components/shared/CardsContainer/CardsContainer';
import { useProducts } from '@/hooks/features/useProducts';
import Banner from './components/Banner/Banner';

function Home() {
  const { data, isSuccess } = useProducts();

  return (
    <section className="rows-container">
      <Banner />
      {isSuccess && data?.products && (
        <CardsContainer products={data.products} />
      )}
    </section>
  );
}

export default Home;
