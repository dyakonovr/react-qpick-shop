import { IUser } from "@/interfaces/user.interface"

export interface ITokens {
  accessToken: string
  refreshToken: string
}

export interface IInitialState {
  user: IUser | null
  isLoading: boolean
}

export interface IEmailPassword {
  email: string
  password: string
}

export interface IAuthResponse extends ITokens {
  user: IUser & { isAdmin: boolean }
}