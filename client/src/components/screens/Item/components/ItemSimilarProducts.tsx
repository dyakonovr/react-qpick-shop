import CardsContainer from "@/components/ui/local/CardsContainer";
import { IProduct } from "@/types/features/product/product.types";

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
