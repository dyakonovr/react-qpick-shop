import IDatabase from "@interfaces/store/IDatabase";
import IProduct from "@interfaces/store/IProduct";
import Category from "../Category/Category";

function Categories({ categories, products }: IDatabase) {
  function createCategories() {
    const categoryComponentsList = [];
    
    for (const categoryId in categories) {
      const categoryName = categories[categoryId];
      const currentProducts = products.filter((product: IProduct) => product.categoryId === Number(categoryId));

      categoryComponentsList.push(
        <Category categoryName={categoryName} categoryId={categoryId} products={currentProducts} key={categoryId} />
      );
    }

    return categoryComponentsList;
  }

  return (
    <>{createCategories()}</>
  );
};

export default Categories;