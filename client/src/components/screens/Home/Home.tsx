import Categories from "@/components/shared/Categories/Categories";
import Banner from "./components/Banner/Banner";
import { useEffect } from "react";
import getProducts from "./api/getProducts";
import { toast } from "@/components/ui/use-toast";
import { useAppSelector } from "@/hooks/useAppSelector";

function Home() {
  const { products } = useAppSelector(state => state.productsSlice);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getProducts();

      if (typeof response === "string") {
        toast({
          title: "Загрузка товаров",
          description: (
            <span>Произошла ошибка: {response}</span>
          ),
        });
      } else {
        console.log(response);
      }
    };

    if (products.length === 0) fetchUsers();
  }, []);

  console.log("products: ", products);

  return (
    <section className="rows-container">
      <Banner />
      {/* <Categories categories={categories} products={products} /> */}
      <Categories />
    </section>
  );
};

export default Home;