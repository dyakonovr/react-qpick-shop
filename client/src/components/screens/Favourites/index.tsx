import CardsContainer from '@/components/shared/CardsContainer';
import { useTypedSelector } from '@/hooks/general/useTypedSelector';
import { getFavouritesSelector } from '@/store/slices/favourites/favourites.selectors';

function Favourites() {
  const { favourites, isLoading, isSuccess } = useTypedSelector(
    getFavouritesSelector
  );

  return (
    <section className="rows-container">
      <strong className="subtitle">Избранное</strong>
      <CardsContainer
        products={favourites}
        isLoading={isLoading}
        isSuccess={isSuccess}
      />
    </section>
  );
}

export default Favourites;
