import CardsContainer from '@/components/shared/CardsContainer/CardsContainer';
import Banner from './components/Banner/Banner';
import { useProducts } from "@/hooks/useProducts";
import { useProfile } from "@/hooks/useProfile";

function Home() {
  const { data, isSuccess } = useProducts();
  const { profile } = useProfile();

  console.log(profile?.favourites);

  return (
    <section className="rows-container">
      <Banner />
      {isSuccess && data?.products && <CardsContainer products={data.products} />}
    </section>
  );
}

export default Home;
