import { clearToken, setToken } from './authSlice';
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";

export function useAuth() {
  const token = useAppSelector((state) => state.userSlice.token);
  return !!token;
}
