import CardsContainer from "@/components/shared/CardsContainer";
import { IProduct } from "@/types/product/product.types";

interface IItemSimilarProductsProps {
  products: IProduct[];
}

function ItemSimilarProducts({ products }: IItemSimilarProductsProps) {
  return (
    <div>
      <strong className="subtitle mt-5 mb-3">Похожие товары</strong>
      <CardsContainer
        isError={false}
        isLoading={false}
        isSuccess={true}
        products={products}
      />
    </div>
  );
}

export default ItemSimilarProducts;
