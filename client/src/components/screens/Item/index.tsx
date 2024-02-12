import { Navigate, useNavigate } from "react-router-dom";
import ItemPage from "./page";
import ItemSkeleton from "./skeleton";
import { useQueryParams } from "@/hooks/general/useQueryParams";
import { useProduct } from "@/hooks/features/useProduct";

function Item() {
  const productId = Number(useQueryParams("id"));
  const navigate = useNavigate();
  const { product, isLoading, isError } = useProduct(productId);

  if (isLoading) return <ItemSkeleton />;
  if (isError) navigate("*");

  return product ? <ItemPage product={product} /> : <Navigate to={"*"} />;
}

export default Item;
