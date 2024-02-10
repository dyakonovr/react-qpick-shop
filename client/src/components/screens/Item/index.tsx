import { useProduct } from '@/hooks/features/useProduct';
import { useQueryParams } from '@/hooks/general/useQueryParams';
import { Navigate, useNavigate } from 'react-router-dom';
import ItemPage from './page';
import ItemSkeleton from './skeleton';

function Item() {
  const productId = Number(useQueryParams('id'));
  const navigate = useNavigate();
  const { product, isLoading, isError } = useProduct(productId);

  if (isLoading) return <ItemSkeleton />;
  if (isError) navigate('*');

  return product ? <ItemPage product={product} /> : <Navigate to={'*'} />;
}

export default Item;
