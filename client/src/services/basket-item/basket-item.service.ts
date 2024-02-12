import { IUpdateBasketItemData } from "./basket-item.types";
import { $axios } from "@/api/api.interceptor";

class BasketItemService {
  private url = "/basket-item";

  create = async (productId: number, basketId: number) => {
    return await $axios.post(this.url, { productId, basketId });
  };

  update = async (updateData: IUpdateBasketItemData) => {
    return await $axios.patch(
      `${this.url}/update-quantity/${updateData.basketItemId}`,
      {
        quantity: updateData.quantity
      }
    );
  };

  delete = async (basketItemId: number) => {
    return await $axios.delete(`${this.url}/${basketItemId}`);
  };
}

export default new BasketItemService();
