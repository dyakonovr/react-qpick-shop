import { IUser } from "@/types/user.types";

export interface IEmailPassword {
  email: string;
  password: string;
}

export interface IAuthResponse {
  user: IUser;
  accessToken: string;
  refreshToken: string;
}
