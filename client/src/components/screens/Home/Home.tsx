import Card from "@/components/shared/Card/Card";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useEffect, useState } from "react";
import fetchProducts from "./api/fetchProducts";
import Banner from "./components/Banner/Banner";

function Home() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(state => state.productsSlice.products);
  // Если товаров на сервере меньше 15,
  // то будут бесконечные запросы
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => { 
    if (products === null || (products !== null && products.length < 15 && !isLoading)) {
      dispatch(fetchProducts(products?.length || 0));
      setIsLoading(true);
    }
    else return;
  }, [products]);

  return (
    <section className="rows-container">
      <Banner />
      <div className="products_grid">
        {products && products.slice(0, 15).map(product => <Card {...product} key={product.id} />)}
      </div>
    </section>
  );
};

export default Home;