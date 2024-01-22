import { Roles } from '@/enum/Roles';

export type IUser = {
  id: number;
  email: string;
  role: Roles;
}
