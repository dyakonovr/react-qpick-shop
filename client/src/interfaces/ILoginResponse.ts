import { Roles } from "@/enum/Roles";

export interface ILoginResponse {
  token: string,
  id: number,
  role: Roles,
}