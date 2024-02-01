import { IUser } from '@/types/user.types';

export interface IInitialState {
  user: IUser | null;
  isLoading: boolean;
  errorMessage: string | null;
}

export interface IEmailPassword {
  email: string;
  password: string;
}

export interface IAuthResponse {
  user: IUser;
  accessToken: string;
  refreshToken: string;
}
