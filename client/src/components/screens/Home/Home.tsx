import Category from "@/components/shared/Category/Category";
import { toast } from "@/components/ui/use-toast";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { setCategories } from "@/store/categories/CategoriesSlice";
import { setProducts } from "@/store/products/ProductsSlice";
import { useEffect } from "react";
import getCategories from "./api/getCategories";
import getProducts from "./api/getProducts";
import Banner from "./components/Banner/Banner";

function Home() {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector(state => state.productsSlice);
  const { categories } = useAppSelector(state => state.categoriesSlice);

  // Функции
  async function fetchProducts() {
    const response = await getProducts();

    if (typeof response === "string") {
      toast({
        title: "Загрузка товаров",
        description: (
          <span>Произошла ошибка: {response}</span>
        ),
      });
    } else {
      dispatch(setProducts(response));
    }
  }

  async function fetchCategories() {
    const response = await getCategories();

    if (typeof response === "string") {
      toast({
        title: "Загрузка товаров",
        description: (
          <span>Произошла ошибка: {response}</span>
        ),
      });
    } else {
      dispatch(setCategories(response));
    }
  }

  useEffect(() => {
    if (products.length === 0) fetchProducts();
    if (categories.length === 0) fetchCategories();
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