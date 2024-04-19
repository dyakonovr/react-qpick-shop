import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ItemButtons from "./components/ItemButtons";
import classes from "./styles.module.scss";
import ItemInfo from "./components/ItemInfo";
import ItemGallery from "./components/ItemGallery";
import ItemDetails from "./components/ItemDetails";
import ItemSimilarProducts from "./components/ItemSimilarProducts";
import type { IGetProductByIdResponse } from "@/services/product/product.types";
import LikeButton from "@/components/ui/local/LikeButton";

interface IItemPageProps {
  data: IGetProductByIdResponse;
}

function ItemPage({ data }: IItemPageProps) {
  const { product, similarProducts } = data;
  const { id, name, info, categoryName, price, rating, image, gallery } = product;
  const navigate = useNavigate();

  return (
    <section className={classes.item}>
      <strong
        onClick={() => navigate(-1)}
        className={`subtitle ${classes.item__back_link}`}
      >
        <MoveLeft /> Назад
      </strong>
      <div className={`rounded_white_block ${classes.content}`}>
        <div className={classes.content__main}>
          <LikeButton productId={id} />
          <ItemGallery gallery={[...gallery, image]} productName={name} />
          <ItemDetails id={id} name={name} categoryName={categoryName} />
        </div>
      </div>
      <div className={classes.info}>
        <ItemInfo info={info} />
        <ItemButtons productId={id} price={price} rating={rating} />
      </div>
      <ItemSimilarProducts products={similarProducts} />
    </section>
  );
}

export default ItemPage;
