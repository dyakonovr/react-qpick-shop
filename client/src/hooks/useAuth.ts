import { useAppSelector } from "./useAppSelector";

export function useAuth() {
  const { token, id, role } = useAppSelector((state) => state.userSlice);
  return {isAuth: !!token, userId: id, role};
}
