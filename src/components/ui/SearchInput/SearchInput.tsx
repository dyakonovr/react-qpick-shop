import { Link, useLocation, useSearchParams } from "react-router-dom";
import classes from "./SearchInput.module.scss";
import { useAppSelector } from "hooks/useAppSelector";
import IProduct from "interfaces/store/database/IProduct";
import { compareTermAndProduct } from "functions/compareTermAndProduct";
import { useEffect, useRef } from "react";

function SearchInput({ placeholder }: { placeholder: string }) {
  // Сбрасываю инпут после перехода по страницам
  const { pathname } = useLocation();
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    (searchInputRef.current as HTMLInputElement).value = "";
  }, [pathname]);
  // Сбрасываю инпут после перехода по страницам END

  const [searchParams, setSearchParams] = useSearchParams();
  const { products } = useAppSelector(state => state.databaseSlice.data);

  // Функции
  function showSearchProducts() {
    const searchTerm = searchParams.get("search");
    if (!searchTerm) return;

    const currentProducts = products.filter((product: IProduct) => compareTermAndProduct(product, searchTerm));
    if (currentProducts.length !== 0) {
      return (
        <ul className={classes.dropdown}>
          {currentProducts.map((product: IProduct) => {
            return <li className={classes.dropdown__item} key={product.id}><Link to={`/item?id=${product.id}`}>{product.name}</Link></li>
          })}
        </ul>
      );  
    }
  }

  return (
      <div className="input_wrapper input_wrapper--search">
        <input
          ref={searchInputRef}
          type="text"
          placeholder={placeholder || ""}
          onKeyUp={(e) => {
            const oldSearchParams = Object.fromEntries(searchParams);
            setSearchParams({...oldSearchParams, "search": (e.target as HTMLInputElement).value})
          }} 
        />
      
        {showSearchProducts()}
      </div>
    );
};

export default SearchInput;