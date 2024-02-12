import * as z from "zod";
import { AuthFormSchema } from "./auth.constants";

export type AuthFormValuesType = z.infer<typeof AuthFormSchema>;
export type AuthType = "login" | "registration";
