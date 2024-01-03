import CardsContainer from '@/components/shared/CardsContainer/CardsContainer';
import { useFavourites } from '@/hooks/features/useFavourites';

function Favourites() {
  const { favourites } = useFavourites();

  return (
    <section className="rows-container">
      <strong className="subtitle">Избранное</strong>
      {favourites && <CardsContainer products={favourites} />}
    </section>
  );
}

export default Favourites;
