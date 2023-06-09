import IProduct from "../store/IProduct";

export default interface ICategory {
  categoryName: string,
  categoryId: number,
  products: IProduct[]
}