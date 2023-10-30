import Category from "@/components/shared/Category/Category";
import { toast } from "@/components/ui/use-toast";
import { PagePaths } from "@/enum/PagePaths";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { setCategories } from "@/store/categories/CategoriesSlice";
import { setProducts } from "@/store/products/ProductsSlice";
import { setUser } from "@/store/user/UserSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getCategories from "./api/getCategories";
import getProducts from "./api/getProducts";
import isAuth from "./api/isAuth";
import Banner from "./components/Banner/Banner";

function Home() {
  const navigate = useNavigate();
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

  // async function checkIsAuth() {
  //   if (!localStorage.getItem("token")) {
  //     navigate(PagePaths.AUTHENTICATION.LOGIN);
  //     return;
  //   }

  //   const response = await isAuth();
  //   if (typeof response === "string") {
  //     toast({
  //       title: "Проверка авторизации",
  //       description: (
  //         <span>Произошла ошибка: {response}</span>
  //       ),
  //     });
  //     return;
  //   } else {
  //     dispatch(setUser(response));
  //     navigate(PagePaths.HOME);
  //   }
  // }
  // Функции END

  // useEffect(() => {
  //   checkIsAuth();
  // }, []);

  useEffect(() => {
    if (products.length === 0) fetchProducts();
    if (categories.length === 0) fetchCategories();
  }, []);

  return (
    <section className="rows-container">
      <Banner />
      {categories.map(categoryObj => <Category category={categoryObj} products={products.filter(product => product.categoryId === categoryObj.id)} key={categoryObj.id} />)}
    </section>
  );
};

export default Home;