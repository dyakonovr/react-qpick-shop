import { Link } from "react-router-dom";
import type { IOrderItem } from "@/types/features/order.types";
import { TableCell, TableRow } from "@/components/ui/shadcn/table";
import { PagePaths } from "@/enum/PagePaths";
import { useImageLoader } from "@/hooks/general/useImageLoader";
import { Skeleton } from "@/components/ui/shadcn/skeleton";

function OrderModalProductItem({ item }: { item: IOrderItem }) {
  const { isImageLoaded } = useImageLoader(item.oldProductImage);

  return (
    <TableRow key={item.id}>
      <TableCell className="text-center">
        {isImageLoaded ? (
          <img
            src={item.oldProductImage}
            alt={item.oldProductName}
            className="w-[100px] h-[100px]"
          />
        ) : (
          <Skeleton className="w-[100px] h-[100px]" />
        )}
      </TableCell>
      <TableCell className="text-center underline text-lg">
        <Link to={`${PagePaths.ITEM}?id=${item.productId}`}>{item.oldProductName}</Link>
      </TableCell>
      <TableCell className="text-center text-lg">{item.oldProductPrice}</TableCell>
      <TableCell className="text-center text-lg">{item.quantity}</TableCell>
    </TableRow>
  );
}

export default OrderModalProductItem;
