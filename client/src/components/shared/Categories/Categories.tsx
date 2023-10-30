import { ICategory } from "@/interfaces/ICategory";
import Category from "../Category/Category";
import { IProduct } from "@/interfaces/IProduct";
// import IDatabase from 'interfaces/store/database/IDatabase';

interface ICategoriesProps {
  categories: ICategory[],
  products: IProduct[]
}

function Categories({categories, products}: ICategoriesProps) {

  return (
    <>
      {}
    </>
  );

  // return <div>Categories</div>
  // return <Card />
};

export default Categories;