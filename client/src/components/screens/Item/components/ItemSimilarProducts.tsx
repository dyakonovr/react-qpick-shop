import CardsContainer from "@/components/shared/CardsContainer";

function ItemSimilarProducts() {
  return (
    <div>
      <strong className="subtitle mt-5 mb-3">Похожие товары</strong>
      <CardsContainer isError={false} isLoading={true} isSuccess={false} products={[]} />
    </div>
  );
}

export default ItemSimilarProducts;
