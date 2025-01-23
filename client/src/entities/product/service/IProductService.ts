import type { IGetAllProductsRequestParams, IGetAllProductsResponse } from "./dtos";

export interface IProductService {
  getAll: (
    queryParams?: IGetAllProductsRequestParams
  ) => Promise<IGetAllProductsResponse>;
}
