import type { RootType } from "@/store/store";

export function getOrdersQuantitySelector(state: RootType) {
  return state.orders.data?.length || 0;
}
