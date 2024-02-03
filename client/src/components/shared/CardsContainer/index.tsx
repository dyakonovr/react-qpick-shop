import { Product } from '@/types/product.types';
import Card from '../Card';
import CardSkeleton from '../Card/skeleton';
import classes from './styles.module.scss';

type ICardsContainerProps = {
  isLoading: boolean;
  isSuccess: boolean;
  products: Product[] | undefined | null;
};

function CardsContainer({
  isLoading,
  isSuccess,
  products,
}: ICardsContainerProps) {
  const isShowProducts = isSuccess && products;

  // Функции
  function getSkeletons() {
    return (
      <>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </>
    );
  }
  // Функции END

  return (
    <div className={classes.products_grid}>
      {isLoading && getSkeletons()}
      {isShowProducts &&
        products.map((product) => <Card {...product} key={product.id} />)}
    </div>
  );
}

export default CardsContainer;
