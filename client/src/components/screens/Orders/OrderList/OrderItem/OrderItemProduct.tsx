import { Link } from "react-router-dom";
import type { IOrderItem } from "@/types/features/order.types";
import { PagePaths } from "@/enum/PagePaths";
import { normalizePrice } from "@/functions/normalizePrice";

function OrderItemProduct({ orderItemProduct }: { orderItemProduct: IOrderItem }) {
  return (
    <li className="flex gap-3">
      <img
        src={orderItemProduct.oldProductImage}
        className="max-w-[100px] max-h-[100px]"
      />
      <div>
        <p>
          <Link to={`${PagePaths.ITEM}?id=${orderItemProduct.productId}`}>
            <span className="font-semibold">Товар: </span>{" "}
            <span className="underline hover:no-underline">
              {orderItemProduct.oldProductName}
            </span>
          </Link>
        </p>
        <p>
          <span className="font-semibold">Цена:</span>{" "}
          {normalizePrice(orderItemProduct.oldProductPrice)}
        </p>
        <p>
          <span className="font-semibold">Количество:</span> {orderItemProduct.quantity}
        </p>
      </div>
    </li>
  );
}

export default OrderItemProduct;
