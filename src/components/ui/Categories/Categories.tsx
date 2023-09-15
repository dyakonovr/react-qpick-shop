import Category from "../Category/Category";
import IDatabase from 'interfaces/store/database/IDatabase';

function Categories({ categories, products }: IDatabase) {
  function createCategories() {
    const categoryComponentsList = [];
    
    for (const categoryId in categories) {
      const categoryName = categories[categoryId];
      const currentProducts = products.filter((product) => product.categoryId === Number(categoryId));

      categoryComponentsList.push(
        <Category categoryName={categoryName} products={currentProducts} key={categoryId} />
      );
    }

    return categoryComponentsList;
  }

  return createCategories();
};

export default Categories;