import Card from "@/components/shared/Card/Card";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useEffect } from "react";
import fetchProducts from "./api/fetchProducts";
import Banner from "./components/Banner/Banner";
import CardsContainer from "@/components/shared/CardsContainer/CardsContainer";

function Home() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(state => state.productsSlice.products);
  // Если товаров на сервере меньше 15,
  // то будут бесконечные запросы
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => { 
    // if (products === null || (products !== null && products.length < 15 && !isLoading)) {
    //   dispatch(fetchProducts(products?.length || 0));
    //   setIsLoading(true);
    // }
    if (products === null) dispatch(fetchProducts());
    else return;
  }, [products]);

  return (
    <section className="rows-container">
      <Banner />
      {products && <CardsContainer products={products.slice(0, 15)} />}
    </section>
  );
};

export default Home;