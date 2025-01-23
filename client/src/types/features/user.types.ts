import type { Roles } from "@/shared/enum/Roles";

export interface IUser {
  id: number;
  email: string;
  role: Roles;
}
