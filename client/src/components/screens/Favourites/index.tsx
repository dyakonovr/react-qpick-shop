import CardsContainer from '@/components/shared/CardsContainer';
import { useTypedSelector } from '@/hooks/general/useTypedSelector';
import { getFavouritesSelector } from '@/store/slices/favourites/favourites.selectors';

function Favourites() {
  const { favourites, isLoading, isSuccess } = useTypedSelector(
    getFavouritesSelector
  );
  const isFavouritesEmpty = isSuccess && favourites?.length === 0;

  return (
    <section className="rows-container">
      <strong className="subtitle">Избранное</strong>
      {!isFavouritesEmpty ? <CardsContainer
        products={favourites}
        isLoading={isLoading}
        isSuccess={isSuccess}
        // @ts-expect-error
        isError={false}
      /> : <p>У вас пока что нет избранных товаров. Самое время это исправить!</p>}
    </section>
  );
}

export default Favourites;
