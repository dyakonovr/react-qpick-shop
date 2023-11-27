import Card from "@/components/shared/Card/Card";
import CardsContainer from "@/components/shared/CardsContainer/CardsContainer";
import { useAppSelector } from '@/hooks/useAppSelector';

function Favourites() {
  const { idList } = useAppSelector(state => state.favouritesSlice);
  const products = useAppSelector(state => state.productsSlice.products);
  const favouriteProducts = getProducts();

  // Функции
  function getProducts() {
    return idList.map((id: number) => {
      const product = products?.find(product => product.id === id);
      if (!product) return;

      return <Card {...product} />;
    });
  }
  // Функции END

  return (
    <section className="rows-container">
      <strong className="subtitle">Избранное</strong>
      {favouriteProducts && <CardsContainer products={favouriteProducts} />}
    </section>
  );
};

export default Favourites;