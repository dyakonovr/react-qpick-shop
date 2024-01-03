import { useTypedSelector } from "../general/useTypedSelector";

export const useUser = () => {
  return useTypedSelector(state => state.user);
}