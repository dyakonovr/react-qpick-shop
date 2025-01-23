import { useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootType } from "@/store/store";

export const useTypedSelector: TypedUseSelectorHook<RootType> = useSelector;
