import LikeButton from '@/components/shared/LikeButton/LikeButton';
import Price from '@/components/shared/Price/Price';
import { Roles } from '@/enum/Roles';
import { useProduct } from '@/hooks/features/products/useProduct';
import { IProductInfo } from '@/interfaces/product.interface';
import { useSearchParams } from 'react-router-dom';
import classes from './Item.module.scss';

function Item() {
  const [searchParams, _] = useSearchParams();
  const productId = Number(searchParams.get('id'));

  const product = useProduct(productId);
  const productInfo = transformInfo(product?.info || '');

  // 4:47:14
  // const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  // const { isAuth, role } = useAuth();

  // const basketId = useAppSelector(state => state.basketSlice.id);

  // const products = useAppSelector(state => state.productsSlice.products);
  // const categories = useAppSelector(state => state.categoriesSlice.categories);
  // const basketProducts = useAppSelector(state => state.basketSlice.products);

  // const [product, setProduct] = useState<IProduct | null>(null);
  // const [category, setCategory] = useState<ICategory | null>(null);
  // const [isAddedToBasket, setIsAddedToBasket] = useState(false);

  // useEffect(() => {
  //   if (!productId) return;

  //   if (products && products.length !== 0) {
  //     const product = products.find(product => product.id === productId);

  //     if (product) setProduct(product);
  //     else dispatch(fetchProduct(productId));
  //   }

  //   else dispatch(fetchProduct(productId));
  // }, [products]);

  // useEffect(() => {
  //   if (!product || !basketProducts) return;

  //   setIsAddedToBasket(!!basketProducts.find(basketProduct => basketProduct.productId === product.id));
  // }, [product, basketProducts]);

  // useEffect(() => {
  //   if (!product) return;

  //   if (categories && categories.length !== 0) {
  //     const category = categories.find(category => category.id === product.categoryId);

  //     if (category) setCategory(category);
  //     else dispatch(fetchCategory(product.categoryId));
  //   }

  //   else dispatch(fetchCategory(product.categoryId));
  // }, [product, categories]);

  // Функции
  // async function handleAddToCartButton() {
  //   if (!product || !basketId) return;

  //   dispatch(createBasketProduct(product.id, basketId));
  // }

  function transformInfo(infoString: string): IProductInfo[] {
    return infoString ? JSON.parse(infoString) : [];
  }
  // Функции END

  return (
    <section className={classes.item}>
      {/* <strong className={`subtitle subtitle--gray`}>{category?.name}</strong> */}
      <div className={`block ${classes.content}`}>
        <div className={classes.content__main}>
          <LikeButton productId={productId} />
          <div className={classes.content__photos}>
            {product?.imgs.map((image) => (
              <div className={classes.content__photo} key={image}>
                <img src={image} alt="Photo 5" key={image} />
              </div>
            ))}
          </div>
          <div className={classes.content__footer}>
            <strong className={classes.content__title}>{product?.name}</strong>
            <Price currentPrice={product?.price || 0} isBigFont={true} />
          </div>
        </div>
      </div>
      <div className={classes.info}>
        <div className={classes.info__wrapper}>
          <strong className={`subtitle block ${classes.info__title}`}>
            Описание и характеристики
          </strong>
          <div className={classes.info__container}>
            {product &&
              productInfo.map((infoObject) => (
                <p
                  className={classes.info__text}
                  key={`${infoObject.name}: ${infoObject.value}`}
                >
                  {`${infoObject.name}: ${infoObject.value}`}
                </p>
              ))}
          </div>
        </div>
        <div className={classes.info__btns}>
          {/* <a className={`link ${classes.info__btn}`} href={isAuth ? "#" : PagePaths.AUTHENTICATION.LOGIN}>Купить!</a> */}
          <button
            type="button"
            className={`link ${classes.info__btn}`}
            // disabled={isAddedToBasket}
            // onClick={isAuth ? handleAddToCartButton : () => navigate(PagePaths.AUTHENTICATION.LOGIN)}
            // ref={addToCartBtnRef}
          >
            {/* {isAddedToBasket ? "Добавлено в корзину" : "Добавить в корзину"} */}
          </button>
          {'ADMIN' === Roles.ADMIN && (
            <>
              <button
                type="button"
                className={`link ${classes.info__btn} ${classes['info__btn--edit']}`}
                // onClick={isAuth ? handleAddToCartButton : () => navigate(PagePaths.AUTHENTICATION.LOGIN)}
              >
                Редактировать товар
              </button>
              <button
                type="button"
                className={`link ${classes.info__btn} ${classes['info__btn--delete']}`}
                // onClick={isAuth ? handleAddToCartButton : () => navigate(PagePaths.AUTHENTICATION.LOGIN)}
              >
                Удалить товар
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Item;
