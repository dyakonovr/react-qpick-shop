import { IUpdateBasketItemData } from "./basket-item.types";
import { $axios } from "@/api/api.interceptor";

class BasketItemService {
  private url = "/basket-item";

  create = async (productId: number, basketId: number) => {
    const response = await $axios.post(this.url, { productId, basketId });
    return response.data;
  };

  update = async (updateData: IUpdateBasketItemData) => {
    await $axios.patch(`${this.url}/update-quantity/${updateData.basketItemId}`, {
      quantity: updateData.quantity
    });
  };

  delete = async (basketItemId: number) => {
    await $axios.delete(`${this.url}/${basketItemId}`);
  };
}

export default new BasketItemService();
