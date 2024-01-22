import { IProduct } from '@/types/product.types';

export function compareTermAndProduct(product: IProduct, term: string) {
  const productName = product.name.toLowerCase();
  term = term.toLowerCase().trim();

  if (productName.includes(term)) return true;
  if (Number(term) && Number(term) === product.id) return true;
  return false;
}
