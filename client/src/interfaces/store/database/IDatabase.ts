import IProduct from "./IProduct";
import ICategoriesObject from './ICategoriesObject';

export default interface IDatabase {
  categories: ICategoriesObject,
  products: IProduct[],
}