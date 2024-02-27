import type * as z from "zod";
import type { AuthFormSchema } from "./auth.constants";

export type AuthFormValuesType = z.infer<typeof AuthFormSchema>;
export type AuthType = "login" | "registration";
