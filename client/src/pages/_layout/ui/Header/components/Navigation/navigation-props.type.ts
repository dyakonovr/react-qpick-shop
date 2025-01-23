import type { NavigateFunction } from "react-router-dom";

export interface IHeaderNavigationProps {
  notifyUnauthorizedAction?: () => void;
  handleAuthenticateUserButton: () => Promise<void>;
  isAuth: boolean;
  isAdmin: boolean;
  navigate: NavigateFunction;
}
