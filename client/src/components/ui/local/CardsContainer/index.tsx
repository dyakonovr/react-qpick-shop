import Card from "./Card";
import CardSkeleton from "./Card/skeleton";
import classes from "./styles.module.scss";
import { Nullable } from "@/types/general/nullable.type";
import { IProduct } from "@/types/features/product/product.types";

interface ICardsContainerProps {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  products: Nullable<IProduct[]> | undefined;
}

function CardsContainer({
  isLoading,
  isSuccess,
  isError,
  products
}: ICardsContainerProps) {
  const isProductsAvailable = products && products.length !== 0;
  const isNoProducts = !isProductsAvailable && isSuccess;
  const isBlockNeeded = !isError && !isNoProducts;

  return (
    <>
      {isBlockNeeded && (
        <div className={classes.products_grid}>
          {isLoading &&
            Array.from({ length: 3 }, (_, index) => (
              <CardSkeleton key={`skeleton ${index + 1}`} />
            ))}
          {isProductsAvailable &&
            products.map((product) => <Card {...product} key={product.id} />)}
        </div>
      )}
      {isError && <p>Возникла ошибка. Попробуйте обновить страницу</p>}
      {isNoProducts && <p>Товаров по такому запросу не нашлось...</p>}
    </>
  );
}

export default CardsContainer;
