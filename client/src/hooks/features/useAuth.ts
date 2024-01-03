import { useTypedSelector } from "../general/useTypedSelector";

export function useAuth() {
  return useTypedSelector(state => state.user);
}
