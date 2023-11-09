import Category from "@/components/shared/Category/Category";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useEffect } from "react";
import fetchCategories from "./api/fetchCategories";
import fetchProducts from "./api/fetchProducts";
import Banner from "./components/Banner/Banner";

function Home() {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector(state => state.productsSlice);
  const { categories } = useAppSelector(state => state.categoriesSlice);

  useEffect(() => {
    if (products.length === 0) dispatch(fetchProducts());
    if (categories.length === 0) dispatch(fetchCategories());
  }, []);

  return (
    <section className="rows-container">
      <Banner />
      {categories.map(categoryObj => {
        const currentProducts = products.filter(product => product.categoryId === categoryObj.id);
        if (currentProducts.length === 0) return;

        return <Category category={categoryObj} products={currentProducts} key={categoryObj.id} />
      })}
    </section>
  );
};

export default Home;