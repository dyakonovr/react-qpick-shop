import { useAppSelector } from '@/hooks/useAppSelector';
import Banner from "./components/Banner/Banner";
import Categories from "@/components/shared/Categories/Categories";

function Catalog() {
  // const { categories, products } = useAppSelector(state => state.databaseSlice.data);

  return (
    <section className="rows-container">
      <Banner />
      {/* <Categories categories={categories} products={products} /> */}
      <Categories />
    </section>
  );
};

export default Catalog;