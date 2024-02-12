import { Roles } from "@/enum/Roles";

export interface IUser {
  id: number;
  email: string;
  role: Roles;
}
