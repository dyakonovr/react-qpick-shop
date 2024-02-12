import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ItemButtons from "./components/ItemButtons";
import classes from "./styles.module.scss";
import ItemInfo from "./components/ItemInfo";
import ItemGallery from "./components/ItemGallery";
import ItemDetails from "./components/ItemDetails";
import ItemSimilarProducts from "./components/ItemSimilarProducts";
import { IExtendedProduct } from "@/types/product/product.types";
import LikeButton from "@/components/shared/LikeButton";

interface IItemPageProps {
  product: IExtendedProduct;
}

function ItemPage({ product }: IItemPageProps) {
  const navigate = useNavigate();

  return (
    <section className={classes.item}>
      <strong
        onClick={() => navigate(-1)}
        className={`subtitle ${classes.item__back_link}`}
      >
        <MoveLeft /> Назад
      </strong>
      <div className={`block ${classes.content}`}>
        <div className={classes.content__main}>
          <LikeButton productId={product.id} />
          <ItemGallery
            gallery={[...product.gallery, product.image]}
            productName={product.name}
          />
          <ItemDetails
            id={product.id}
            name={product.name}
            category={product.category}
            price={product.price}
          />
        </div>
      </div>
      <div className={classes.info}>
        <ItemInfo info={product.info} />
        <ItemButtons product={product} />
      </div>
      <ItemSimilarProducts />
    </section>
  );
}

export default ItemPage;
