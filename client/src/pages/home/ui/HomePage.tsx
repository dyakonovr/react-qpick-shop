import { Link } from "react-router-dom";
import Banner from "./Banner";
import { CardsContainer } from "@/shared/ui";
import { useProducts } from "@/entities/product";
import { PagePaths } from "@/shared/enum";

function HomePage() {
  const { data, isLoading, isSuccess, isError } = useProducts();
  const isProductsExist = data.length !== 0;

  return (
    <section className="rows-container">
      <Banner />
      <CardsContainer
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        products={data}
      />
      {isProductsExist && (
        <Link to={PagePaths.CATALOG} className="link w-fit p-3 mx-auto mt-4">
          Посмотреть больше товаров в каталоге
        </Link>
      )}
    </section>
  );
}

export default HomePage;
