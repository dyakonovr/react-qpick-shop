import CardsContainer from '@/components/shared/CardsContainer/CardsContainer';
import { useTypedSelector } from '@/hooks/general/useTypedSelector';

function Favourites() {
  const favourites = useTypedSelector((state) => state.favourites.data);

  return (
    <section className="rows-container">
      <strong className="subtitle">Избранное</strong>
      {favourites && <CardsContainer products={favourites} />}
    </section>
  );
}

export default Favourites;