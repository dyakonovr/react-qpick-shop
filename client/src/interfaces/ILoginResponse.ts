import { Roles } from "@/enum/Roles";

export interface ILoginResponse {
  token: string,
  role: Roles
}