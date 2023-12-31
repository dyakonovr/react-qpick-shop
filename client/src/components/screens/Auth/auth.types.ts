import { AuthFormSchema } from "./auth.constants";
import * as z from 'zod';

export type AuthFormValuesType = z.infer<typeof AuthFormSchema>;
export type AuthType = 'login' | 'registration';